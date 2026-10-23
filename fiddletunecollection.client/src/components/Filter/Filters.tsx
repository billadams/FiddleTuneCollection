import styles from './Ffilters.module.css';

// type Filter = 'Genre' | 'Key' | 'Time';

interface Filter {
  id: string;
  value: string;
}

interface FilterDictionary {
  [key: string]: Filter;
}

// interface Filter {
//   genre: string;
//   key: string;
//   time: string;
// }

interface FiltersProps {
  filters: Filter[]
  handleFilterClick: (filterType: string, filterValue: string) => void;
}

function Filters({ filters, handleFilterClick }: FiltersProps) {

  function handleClick(filterType: string, filterValue: string) {
    handleFilterClick(filterType, filterValue);
  }

  return (
  <div className={styles.filters}>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Genre</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleFilterClick('Genre', 'Jig')}>Jig</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleFilterClick('Genre', 'Polka')}>Polka</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleFilterClick('Genre', 'Reel')}>Reel</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleFilterClick('Genre', 'Waltz')}>Waltz</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Key</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Key', 'All')}>All</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Key', 'A')}>A</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Key', 'C')}>C</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Key', 'D')}>D</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Key', 'G')}>G</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Time</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Time', 'All')}>All</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Time', '2/4')}>2 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Time', '3/4')}>3 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Time', '4/4')}>4 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleFilterClick('Time', '6/8')}>6 / 8</button>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Filters;