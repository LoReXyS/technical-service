import styles from './Elevate.module.css';
import img1 from './img/Icon1';
import img2 from './img/Icon2';
import img3 from './img/Icon3';
import img4 from './img/Icon4';

export default function Elevate() {
  return (
    <>
      <section>
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
                <p>Find What Service You Need</p>
              </li>
              <li className={styles.item}>
                <img src={img2} alt="" />
                <p> Value Price</p>
              </li>
              <li className={styles.item}>
                <img src={img3} alt="" />
                <p>Effortless Service Management</p>
              </li>
              <li className={styles.item}>
                <img src={img4} alt="" />
                <p>Smart Service, Informed Decisions</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
