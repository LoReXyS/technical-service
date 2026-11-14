import styles from './PropertyManagement.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const services = [
  {
    icon: '✣',
    title: 'Tenant Harmony',
    description:
      'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
  },
  {
    icon: '◧',
    title: 'Maintenance Ease',
    description:
      'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
  },
  {
    icon: '✧',
    title: 'Financial Peace of Mind',
    description:
      'Managing property finances can be complex. Our financial experts take care of rent collection.',
  },
  {
    icon: '☼',
    title: 'Legal Guardian',
    description:
      'Stay compliant with property laws and regulations effortlessly.',
  },
];

export default function PropertyManagement() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.decoration}>✦</span>

          <h2 className={styles.title}>Effortless Property Management</h2>

          <p className={styles.description}>
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}

          <div className={styles.banner}>
            <div className={styles.bannerHeader}>
              <h3>Experience Effortless Property Management</h3>

              <button type="button" className={styles.button}>
                Learn More
              </button>
            </div>

            <p>
              Ready to experience hassle-free property management? Explore our
              Property Management Service categories and let us handle the
              complexities while you enjoy the benefits of property ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
