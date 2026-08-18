import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <>
      <section className={styles.section}>
        <h2></h2>
        <div className={styles.container}>
          <h2 className={styles.h1}>Our Achievements</h2>
          <p className={styles.lorem}>
            Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut
            quia beatae. Vel suscipit quia ut reprehenderit quis et debitis
            voluptatem ut consequuntur laudantium. Est sint quaerat eum
            explicabo asperiores est veritatis adipisci et molestiae nisi ut
            amet similique.
          </p>
        </div>

        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <h2 className={styles.h2}>3+ Years of Excellence</h2>
              <p className={styles.txt}>
                Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi
                aut quia beatae. Vel suscipit quia ut reprehenderit quis et
                debitis voluptatem u
              </p>
            </li>
            <li className={styles.listItem}>
              <h2 className={styles.h2}>Happy Clients</h2>
              <p className={styles.txt}>
                Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi
                aut quia beatae. Vel suscipit quia ut reprehenderit quis et
                debitis voluptatem u
              </p>
            </li>
            <li className={styles.listItem}>
              <h2 className={styles.h2}>Industry Recognition</h2>
              <p className={styles.txt}>
                Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi
                aut quia beatae. Vel suscipit quia ut reprehenderit quis et
                debitis voluptatem u
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
