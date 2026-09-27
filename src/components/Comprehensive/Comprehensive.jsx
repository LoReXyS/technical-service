import Detail from '../Detail/Detail';
import ListingPrice from '../ListingPrice/ListingPrice';
import styles from './Comprehensive.module.css';
export default function Comprehensive() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <Detail />
          <ListingPrice />
        </div>
      </section>
    </>
  );
}
