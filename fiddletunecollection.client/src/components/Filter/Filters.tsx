import styles from './Filters.module.css';

function Filters() {
  return (
      <ul className={styles.filters}>
        <li className={styles.filter}>
          <h3>Genre</h3>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Jig</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Polka</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Reel</button>
            <button type='button' className={`${styles.button} ${styles.pillbutton}`}>Waltz</button>
        </li>
        <li className={styles.filter}>
          <h3>Key</h3>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={styles.button}>A</button>
            <button type='button' className={styles.button}>C</button>
            <button type='button' className={styles.button}>D</button>
            <button type='button' className={styles.button}>G</button>
        </li>
        <li className={styles.filter}>
          <h3>Time</h3>
            <button type='button' className={styles.button}>All</button>
            <button type='button' className={styles.button}>2 / 4</button>
            <button type='button' className={styles.button}>3 / 4</button>
            <button type='button' className={styles.button}>4 / 4</button>
            <button type='button' className={styles.button}>6 / 8</button>
        </li>
      </ul>
  );
}

export default Filters;