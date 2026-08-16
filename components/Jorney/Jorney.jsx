import styles from './Jorney.module.css';

export default function Jorney() {
  return (
    <section className={styles.jorney}>
      <div className={styles.container}>
        <ul className={styles.list1}>
          <li className={styles.item1}>
            <h2 className={styles.title}>Our Journey</h2>
          </li>

          <li className={styles.item1}>
            <p className={styles.txt}>
              Vel Quis obcaecati est doloremque numquam qui rerum repellendus.
              Et quia iusto eum molestias provident qui porro modi ex
              repudiandae delectus. Ex iusto voluptas non aspernatur nihil qui
              perspiciatis maxime est inventore veniam et consequatur debitis
              qui enim commodi.
            </p>
          </li>
        </ul>

        <ul className={styles.list2}>
          <li className={styles.item2}>
            <h2 className={styles.info}>200k+</h2>
            <p className={styles.plusInfo}>Happy Customers</p>
          </li>

          <li className={styles.item2}>
            <h2 className={styles.info}>10k+</h2>
            <p className={styles.plusInfo}>Service For Clients</p>
          </li>

          <li className={styles.item2}>
            <h2 className={styles.info}>16+</h2>
            <p className={styles.plusInfo}>Years Of Experience</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
