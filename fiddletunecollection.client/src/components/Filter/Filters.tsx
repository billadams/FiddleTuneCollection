import styles from './Fwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwilters.module.css';

interface Filter {
  name: string;
  values: string[];
}

interface FiltersProps {
  filters: Filter[]
  handleFilterClick: (name: string, value: string) => void;
}

function Filters({ filters, handleFilterClick }: FiltersProps) {

  function handleClick(name: string, value: string) {
    
    // handleFilterClick(name, value);

    console.log(`Clicked: ${name} | ${value}`)
  }

  return (
  <div className={styles.filters}>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Genre</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button} onClick={() => handleClick('Genre', 'All')}>All</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleClick('Genre', 'Jig')}>Jig</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleClick('Genre', 'Polka')}>Polka</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleClick('Genre', 'Reel')}>Reel</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`} onClick={() => handleClick('Genre', 'Waltz')}>Waltz</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Key</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button} onClick={() => handleClick('Key', 'All')}>All</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Key', 'A')}>A</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Key', 'C')}>C</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Key', 'D')}>D</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Key', 'G')}>G</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Time</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button} onClick={() => handleClick('Time', 'All')}>All</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Time', '2/4')}>2 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Time', '3/4')}>3 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Time', '4/4')}>4 / 4</button>
            <button type='button' className={styles.button} onClick={() => handleClick('Time', '6/8')}>6 / 8</button>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Filters;