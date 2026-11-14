import styles from './Value.module.css';
import ServiceCard from '../../src/components/ServiceCard/ServiceCard';

const services = [
  {
    icon: '▥',
    title: 'Valuation Mastery',
    description:
      'Discover the true worth of your property with our expert valuation services.',
  },
  {
    icon: '◕',
    title: 'Strategic Marketing',
    description:
      'Selling a property requires more than just a listing; it demands a strategic marketing approach.',
  },
  {
    icon: '◉',
    title: 'Negotiation Wizardry',
    description:
      'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
  },
  {
    icon: '◀',
    title: 'Closing Success',
    description:
      'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
  },
];

export default function Value() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.decoration}>✦</span>

          <h2 className={styles.title}>Value Price</h2>

          <p className={styles.description}>
            Vel Quis obcaecati est doloremque numquam qui rerum repellendus. Et
            quia iusto eum molestias provident qui porro modi ex repudiandae
            delectus.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}

          <div className={styles.banner}>
            <div className={styles.bannerHeader}>
              <h3>Unlock the Value of Your Property Today</h3>

              <button type="button" className={styles.button}>
                Learn More
              </button>
            </div>

            <p>
              Ready to unlock the true value of your property? Explore our
              Property Selling Service categories and let us help you achieve
              the best deal possible for your valuable asset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
