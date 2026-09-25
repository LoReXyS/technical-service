import styles from './Feauters.module.css';
export default function Feauters() {
  return (
    <>
      <div className={styles.div}>
        <h2 className={styles.h2}>Key Features and Amenities</h2>
        <ul className={styles.list}>
          <li className={styles.li}>
            <p className={styles.p}>
              Expansive oceanfront terrace for outdoor entertaining
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>
              Gourmet kitchen with top-of-the-line appliances
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>
              Private beach access for morning strolls and sunset views
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>
              Master suite with a spa-inspired bathroom and ocean-facing balcony
            </p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>Private garage and ample storage space</p>
          </li>
        </ul>
      </div>
    </>
  );
}
