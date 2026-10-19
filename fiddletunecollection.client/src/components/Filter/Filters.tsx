import styles from './Filters.module.css';

function Filters() {
  return (
  <div className={styles.filters}>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Genre</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Jig</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Polka</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Reel</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Waltz</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Key</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={styles.button}>A</button>
            <button type='button' className={styles.button}>C</button>
            <button type='button' className={styles.button}>D</button>
            <button type='button' className={styles.button}>G</button>
        </li>
      </ul>
    </div>
    <div className={styles.filter}>
      <h4 className={styles.heading}>Time</h4>
      <ul className={styles.buttons}>
        <li>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={styles.button}>2 / 4</button>
            <button type='button' className={styles.button}>3 / 4</button>
            <button type='button' className={styles.button}>4 / 4</button>
            <button type='button' className={styles.button}>6 / 8</button>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Filters;