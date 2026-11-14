import styles from './Elevate.module.css';
import img1 from './img/Icon1.png';
import img2 from './img/Icon2.png';
import img3 from './img/Icon3.png';
import img4 from './img/Icon4.png';

export default function Elevate() {
  return (
    <>
      <section className={styles.section}>
        <h2></h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Elevate Your CTA Experience</h1>
            <p className={styles.description}>
              Welcome to CTA, where your real estate aspirations meet expert
              guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </p>
          </div>
          <div className={styles.features}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img src={img1} alt="" />
                <p className={styles.itemDescription}>
                  Find What Service You Need
                </p>
              </li>
              <li className={styles.item}>
                <img src={img2} alt="" />
                <p className={styles.itemDescription}>Value Price</p>
              </li>
              <li className={styles.item}>
                <img src={img3} alt="" />
                <p className={styles.itemDescription}>
                  Effortless Service Management
                </p>
              </li>
              <li className={styles.item}>
                <img src={img4} alt="" />
                <p className={styles.itemDescription}>
                  Smart Service, Informed Decisions
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
