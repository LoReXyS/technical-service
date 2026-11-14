import styles from './Investments.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
  {
    icon: '▥',
    title: 'Market Insight',
    description:
      'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions.',
  },
  {
    icon: '◉',
    title: 'ROI Assessment',
    description:
      'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments.',
  },
  {
    icon: '♧',
    title: 'Customized Strategies',
    description:
      'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.',
  },
  {
    icon: '✧',
    title: 'Diversification Mastery',
    description:
      'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations.',
  },
];

export default function Investments() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.decoration}>✦</span>

          <h2 className={styles.title}>
            Smart Investments,
            <br />
            Informed Decisions
          </h2>

          <p className={styles.description}>
            Building a real estate portfolio requires a strategic approach.
            Estatein's Investment Advisory Service empowers you to make smart
            investments and informed decisions.
          </p>

          <div className={styles.banner}>
            <h3>Unlock Your Investment Potential</h3>

            <p>
              Explore our Property Management Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership.
            </p>

            <button type="button" className={styles.button}>
              Learn More
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
