import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.icon}>
          <span>{icon}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
      </div>

      <p className={styles.description}>{description}</p>
    </article>
  );
}
