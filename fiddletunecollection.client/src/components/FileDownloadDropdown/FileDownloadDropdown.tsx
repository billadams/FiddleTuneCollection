import {useState, useRef, useEffect} from 'react';
import styles from './FileDownloadDropdown.module.css';

interface DownloadOption {
  filename: string;
  label: string;
  url: string;
}

interface FileDownloadDropdownProps {
  options: DownloadOption[];
  }

function FileDownloadDropdown({ options }: FileDownloadDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = async(option: DownloadOption) => {
    setDownloading(option.label);
    try {
      const response = await fetch(option.url);
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = option.filename;
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(blobUrl);
      setIsOpen(false);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setDownloading(null);
    }
  }

  return (
    <div ref={dropdownRef} className={styles.container}>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup='menu'
        className={styles.showDownloadsButton}
        >
        Download Sheet Music
        </button>

        {isOpen ? 
          <ul
            role='menu'
            className={styles.dropdown}
          >
           {options.map((option) => (
              <li key={option.filename} role='none' className={styles.dropdownItem}>
              <button
                type='button'
                role='menuitem'
                disabled={downloading !== null}
                onClick={() => handleDownload(option)}
                >
                {downloading === option.label ? 'Downloading...' : option.label}
                </button>
                </li>
            ))}
          </ul>
        :
        null}
    </div>
  );
}

export default FileDownloadDropdown;