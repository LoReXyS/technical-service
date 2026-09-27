import styles from './ListingPrice.module.css';
export default function ListingPrice() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.listPrices}>
          <p className={styles.listPricesP}>Listing Price</p>
          <h2 className={styles.listPricesH2}>$000</h2>
        </div>
        <div className={styles.aditional}>
          <span className={styles.span}>
            <h3 className={styles.txt}>Additional Fees</h3>
            <button className={styles.learnMore}>Learn More</button>
          </span>
        </div>
      </div>
    </>
  );
}
