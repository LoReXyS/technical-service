import styles from './Team.module.css';
import teresa from './img/teresa.png';
import renz from './img/renz.png';
import mary from './img/mary.png';
const team = [
  {
    image: teresa,
    name: 'Teresa Cardona',
    position: 'Founder',
  },
  {
    image: renz,
    name: 'Renz Cardona',
    position: 'Marketing Executive',
  },
  {
    image: mary,
    name: 'Mary Jane Marito',
    position: 'Co Founder',
  },
];

export default function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.icon}>✦</span>

          <h2 className={styles.title}>Meet the Service Team</h2>

          <p className={styles.description}>
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>

        <ul className={styles.list}>
          {team.map(({ image, name, position }) => (
            <li className={styles.item} key={name}>
              <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt={name} />

                <button className={styles.twitter} type='button'>
                  🐦
                </button>
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>

                <p className={styles.position}>{position}</p>
              </div>

              <div className={styles.contact}>
                <span className={styles.hello}>Say Hello 👋</span>

                <button className={styles.telegram} type='button'>
                  ➤
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
