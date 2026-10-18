import styles from './filters.module.css';

function Filters() {
  return (
    <div>
      <ul>
        <li className={styles.filters}>
          <h3>Genre</h3>
          <ul className={styles.item}>
            <li><button type='button' className={styles.button}>All</button></li>
            <li><button type='button' className={styles.button}>Jig</button></li>
            <li><button type='button' className={styles.button}>Polka</button></li>
            <li><button type='button' className={styles.button}>Reel</button></li>
            <li><button type='button' className={styles.button}>Waltz</button></li>
          </ul>
        </li>
        <li className={styles.filters}>
          <h3>Key</h3>
          <ul className={`${styles.item}`}>
            <li><button type='button' className={styles.button}>All</button></li>
            <li><button type='button' className={styles.button}>A</button></li>
            <li><button type='button' className={styles.button}>C</button></li>
            <li><button type='button' className={styles.button}>D</button></li>
            <li><button type='button' className={styles.button}>G</button></li>
          </ul>
        </li>
        <li className={styles.filters}>
          <h3>Time</h3>
           <ul className={`${styles.item}`}>
            <li><button type='button' className={styles.button}>All</button></li>
            <li><button type='button' className={styles.button}>2 / 4</button></li>
            <li><button type='button' className={styles.button}>3 / 4</button></li>
            <li><button type='button' className={styles.button}>4 / 4</button></li>
            <li><button type='button' className={styles.button}>6 / 8</button></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Filters;