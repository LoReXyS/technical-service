import Details from '../../pages/Details/Details';
import styles from './Comprehensive.module.css';
export default function Comprehensive() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <Details />
        </div>
      </section>
    </>
  );
}
