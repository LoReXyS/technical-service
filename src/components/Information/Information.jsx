import Swiper from '../Swiper/Swiper';
import styles from './Information.module.css';
export default function Information() {
  return (
    <>
      <section className={styles.information}>
        <div className={styles.container}>
          <div className={styles.priceList}>
            <span className={styles.span1}>
              <h3 className={styles.servicesTxt}>Services</h3>
              <p className={styles.location}>Dubai, United Arab Emirates</p>
            </span>
            <span className={styles.span2}>
              <p className={styles.price}>price</p>
              <h3 className={styles.priceCosts}>$1,000</h3>
            </span>
          </div>
          <div>
            <Swiper />
          </div>
        </div>
      </section>
    </>
  );
}
