import styles from './Values.module.css';
import star from './img/star.png';
import hat from './img/hat.png';
import group from './img/group.png';
export default function Values() {
  return (
    <>
      <section className={styles.Values}>
        <div className={`${styles.container} `}>
          <ul className={styles.listTxt}>
            <li className={styles.item1}>
              <h1 className={styles.h1}>Our Values</h1>
            </li>
            <li className={styles.item1}>
              <p className={styles.txt}>
                Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi
                aut quia beatae. Vel suscipit quia ut reprehenderit quis et
                debitis voluptatem ut consequuntur laudantium. Est sint quaerat
                eum explicabo asperiores est veritatis adipisci et molestiae
                nisi ut amet similique.
              </p>
            </li>
          </ul>
          <ul className={styles.listInfo}>
            <ul className={styles.infoItem}>
              <li className={styles.itemLi}>
                <div className={styles.itemDiv}>
                  <img src={star} alt='' className={styles.img1} />
                  <h2 className={styles.txtTitle}>Trust</h2>
                </div>
                <p className={styles.lorem}>
                  Lorem ipsum dolor sit amet. Ut porro dolores cum velit
                  excepturi aut quia beatae.
                </p>
              </li>
              <li className={styles.itemLi}>
                <div className={styles.itemDiv}>
                  <img src={hat} alt='' className={styles.img1} />
                  <h2 className={styles.txtTitle}>Excellence</h2>
                </div>
                <p className={styles.lorem}>
                  Lorem ipsum dolor sit amet. Ut porro dolores cum velit
                  excepturi aut quia beatae.
                </p>
              </li>
            </ul>

            <ul className={styles.infoItem}>
              <li className={styles.itemLi}>
                <div className={styles.itemDiv}>
                  <img src={group} alt='' className={styles.img1} />
                  <h2 className={styles.txtTitle}>Client-Centric</h2>
                </div>
                <p className={styles.lorem}>
                  Lorem ipsum dolor sit amet. Ut porro dolores cum velit
                  excepturi aut quia beatae.
                </p>
              </li>
              <li className={styles.itemLi}>
                <div className={styles.itemDiv}>
                  <img src={star} alt='' className={styles.img1} />
                  <h2 className={styles.txtTitle}>Our Commitment</h2>
                </div>
                <p className={styles.lorem}>
                  Lorem ipsum dolor sit amet. Ut porro dolores cum velit
                  excepturi aut quia beatae.
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
}
