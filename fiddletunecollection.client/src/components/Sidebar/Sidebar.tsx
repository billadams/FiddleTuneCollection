import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Filters from '../Filter/Filters';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside>
      <div className='sidebarHeading' >
        <h3>Filters</h3>
        <div className={`icon ${styles.closeSidebar}`}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </div>
      </div>
      <Filters />
    </aside>
  );
}

export default Sidebar;