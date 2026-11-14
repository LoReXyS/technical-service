import styles from './Inquire.module.css';

export default function Inquire() {
  return (
    <section className={styles.inquire}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.stars}>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          <h2>
            Inquire About This
            <br />
            Service
          </h2>

          <p>
            Interested in this property? Fill out the form below, and our real
            estate experts will get back to you with more details, including
            scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="Enter First Name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="Enter Last Name" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your Email" />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="Enter Phone Number" />
            </div>
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="selected-property">Selected Property</label>

            <select id="selected-property" defaultValue="seaside">
              <option value="seaside">
                Seaside Serenity Villa, Malibu, California
              </option>

              <option value="modern">
                Modern Luxury Villa, Miami, Florida
              </option>

              <option value="mountain">
                Mountain View Estate, Aspen, Colorado
              </option>
            </select>
          </div>

          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="message">Message</label>

            <textarea id="message" placeholder="Enter your Message here..." />
          </div>

          <div className={styles.bottom}>
            <label className={styles.checkbox}>
              <input type="checkbox" />

              <span>
                I agree with <a href="/">Terms of Use</a> and{' '}
                <a href="/">Privacy Policy</a>
              </span>
            </label>

            <button type="submit">Send Your Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
