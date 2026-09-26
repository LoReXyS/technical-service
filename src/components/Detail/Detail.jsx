import styles from './Detail.module.css';
export default function Detail() {
  return (
    <>
      {' '}
      <h2 className={styles.h2}>Comprehensive Pricing Details</h2>
      <p className={styles.p}>
        At Estatein, transparency is key. We want you to have a clear
        understanding of all costs associated with your property investment.
        Below, we break down the pricing for Seaside Serenity Villa to help you
        make an informed decision
      </p>
      <div className={styles.note}>
        <h3 className={styles.noteTxt}>Note</h3>
        <p className={styles.noteP}>
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </p>
      </div>{' '}
    </>
  );
}
