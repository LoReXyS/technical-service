import styles from './Line.module.css';
import img1 from './imgs/facebook.png';
import img2 from './imgs/twitter.png';
import img3 from './imgs/youtube.png';
export default function Line() {
  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.content}`}>
          <ul className={styles.listFirst}>
            <li className={styles.itemFirst}>
              <a href="" className={styles.firstTxt}>
                @2023 Estatein. All Rights Reserved.
              </a>
            </li>
            <li className={styles.itemFirst}>
              <a href="" className={styles.firstTxt}>
                Terms & Conditions
              </a>
            </li>
          </ul>
          <ul className={styles.listSecond}>
            <li className={styles.itemSecond}>
              <img src={img1} alt="" />
            </li>
            <li className={styles.itemSecond}>
              <img src={img2} alt="" />
            </li>
            <li className={styles.itemSecond}>
              <img src={img3} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
