import styles from './QuestionsW.module.css';
export default function QuestionsW() {
  return (
    <>
      <section className={styles.servisesQuestions}>
        <div className={styles.container}>
          <h1 className={styles.txt}>Frequently Asked Questions</h1>
          <ul className={styles.servisesList}>
            <li className={styles.servisesItem}>
              <p className={styles.servisesP}>
                Hic voluptatem sapiente id galisum omnis aut accusamus natus aut
                quia consequatur.
              </p>
            </li>
            <li className={styles.servisesItem}>
              <a href="#questions" className={`${styles.servisesBtn} ${styles.servisesA}`}>
                View All FAQ’s
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
