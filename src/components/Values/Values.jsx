import styles from './Values.module.css';

export default function Values() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.listTxt}>
          <li className={styles.item1}>
            <h1></h1>
          </li>
          <li className={styles.item1}>
            <p></p>
          </li>
        </ul>
        <ul className={styles.listInfo}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
