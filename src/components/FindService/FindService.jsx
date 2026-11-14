import styles from './FindService.module.css';

export default function FindService() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Find what Service Do you need Today</h2>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet. Est quam nisi ut esse veniam eos
            voluptates officia ut rerum ullam qui officia distinctio
            exercitationem in internos mollitia? A nihil sunt est voluptatibus
            laborum est dignissimos animi aut assumenda sequi non molestiae
            exercitationem ut libero adipisci. Et vero veritatis non distinctio
            sed sed sunt omnis!
          </p>
        </div>

        <button
          type="button"
          className={styles.button}
          onClick={() => {
            document
              .getElementById('services')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Services
        </button>
      </div>
    </section>
  );
}
