import styles from './Key.module.css';
import Description from '../Description/Description';
import Feauters from '../Feauters/Feauters';
export default function Key() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.div}>
            <Description />
            <Feauters />
          </div>
        </div>
      </section>
    </>
  );
}
