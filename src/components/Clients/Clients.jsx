import styles from './Clients.module.css';

const clients = [
  {
    year: 'Since 2019',
    name: 'ABC Services',
    category: 'Luxury Home Development',
    domain: 'Commercial Services',
    text: 'Lorem ipsum dolor sit amet. Et accusantium dolores quo laudantium recusandae est provident internos et voluptas quod hic ducimus voluptatem',
  },
  {
    year: 'Since 2018',
    name: '123 Services',
    category: 'Retail Space',
    domain: 'Commercial Services',
    text: 'Lorem ipsum dolor sit amet. Et accusantium dolores quo laudantium recusandae est provident internos et voluptas quod hic ducimus voluptatem',
  },
];

export default function Clients() {
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.stars}>✦ ✦</div>

          <h2>Our Valued Clients</h2>

          <p>
            Lorem ipsum dolor sit amet. Et accusantium dolores quo laudantium
            recusandae est provident internos et voluptas quod hic ducimus
            voluptatem ut possimus voluptas. At fugit atque et aspernatur
            officia ut facere unde ut iure dolorum.
          </p>
        </div>

        <div className={styles.list}>
          {clients.map((client) => (
            <article className={styles.card} key={client.name}>
              <div className={styles.top}>
                <div>
                  <span className={styles.year}>{client.year}</span>

                  <h3>{client.name}</h3>
                </div>

                <button className={styles.button}>Visit Website</button>
              </div>

              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <span className={styles.label}>
                    <span className={styles.icon}>♧</span>
                    Domain
                  </span>

                  <span className={styles.value}>{client.domain}</span>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.infoItem}>
                  <span className={styles.label}>
                    <span className={styles.icon}>ϟ</span>
                    Category
                  </span>

                  <span className={styles.value}>{client.category}</span>
                </div>
              </div>

              <div className={styles.review}>
                <span className={styles.reviewTitle}>What They Said 🤗</span>

                <p>{client.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
