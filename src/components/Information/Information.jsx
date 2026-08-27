import Swiper from '../Swiper/Swiper';
import styles from './Information.module.css';
export default function Information() {
  return (
    <>
      <section className={styles.information}>
        <div className={styles.container}>
          <div className={styles.price}>
            <span>
              <h3>Services</h3>
              <p>Dubai, United Arab Emirates</p>
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
