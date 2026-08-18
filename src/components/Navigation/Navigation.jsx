import styles from './Navigation.module.css';

const steps = [
  {
    number: 'Step 01',
    title: 'Discover a World of Possibilities',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
  {
    number: 'Step 02',
    title: 'Narrowing Down Your Choices',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
  {
    number: 'Step 03',
    title: 'Personalized Guidance',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
  {
    number: 'Step 04',
    title: 'See It for Yourself',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
  {
    number: 'Step 05',
    title: 'Making Informed Decisions',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
  {
    number: 'Step 06',
    title: 'Getting the Best Deal',
    text: 'Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut quia beatae. Vel suscipit quia ut reprehenderit quis et debitis voluptatem ut consequuntur laudantium. Est sint quaerat eum',
  },
];

export default function Navigation() {
  return (
    <section className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.icon}>✦</span>

          <h2 className={styles.title}>Navigating the Services Experience</h2>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet. Ut porro dolores cum velit excepturi aut
            quia beatae. Vel suscipit quia ut reprehenderit quis et debitis
            voluptatem ut consequuntur
          </p>
        </div>

        <ul className={styles.list}>
          {steps.map(({ number, title, text }) => (
            <li className={styles.item} key={number}>
              <span className={styles.step}>{number}</span>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>

                <p className={styles.cardText}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
