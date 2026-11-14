import styles from './HeroHome.module.css';
import { Link } from 'react-router-dom';
import image from '../HeroHome/Img/Container.png';
export default function HeroHome() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.leftTxt}>
              Discover Your Dream Service with Chosen
            </h2>
            <p className={styles.leftP}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut
              incidunt, quaerat assumenda reiciendis porro fuga tempore, impedit
              molestias nulla nesciunt ullam dignissimos tenetur numquam
              laudantium neque ipsum harum. Dolorum.
            </p>
            <ul className={styles.leftBtnsList}>
              <li className={styles.leftItems}>
                <Link to="/about" className={styles.leftItemsBtn}>
                  Learn More
                </Link>
              </li>
              <li className={styles.leftItems}>
                <Link to="/services" className={styles.leftItemsBtnY}>
                  Browse Services
                </Link>
              </li>
            </ul>
            <ul className={styles.leftListInfo}>
              <li className={styles.leftInfoItem}>
                <h2 className={styles.leftInfoTxt}>200+</h2>
                <p className={styles.leftTxtP}>Happy Customers</p>
              </li>
              <li className={styles.leftInfoItem}>
                <h2 className={styles.leftInfoTxt}>10k+</h2>
                <p className={styles.leftTxtP}>Services For Clients</p>
              </li>
              <li className={styles.leftInfoItem}>
                <h2 className={styles.leftInfoTxt}>16+</h2>
                <p className={styles.leftTxtP}>Years of Experience</p>
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <img src={image} alt='' className={styles.img} />
          </div>
        </div>
      </section>
    </>
  );
}
