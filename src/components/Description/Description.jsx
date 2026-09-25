import styles from './Description.module.css';

export default function Description() {
  return (
    <>
      <div className={styles.div}>
        <h3 className={styles.h3}>Description</h3>
        <p className={styles.paragraph}>
          Chosen Technical Services, where excellence meets innovation in Dubai.
          We take pride in offering a diverse array of technical solutions
          designed to elevate your living or working environment. 
        </p>
        <ul className={styles.list}>
          <li className={styles.li}>
            <p className={styles.paragraph}>Bedrooms</p>
            <h3 className={styles.info}>04</h3>
          </li>
          <li className={styles.li}>
            <p className={styles.paragraph}>Area</p>
            <h3 className={styles.info}>2,500 Square Feet</h3>
          </li>
        </ul>
      </div>
    </>
  );
}
