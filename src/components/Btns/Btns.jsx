import styles from './Btns.module.css';
import { Link } from 'react-router-dom';
import image1 from '../Btns/Imgs/IconContainer1.png';
import image2 from '../Btns/Imgs/IconContainer2.png';
import image3 from '../Btns/Imgs/IconContainer3.png';
import image4 from '../Btns/Imgs/IconContainer4.png';
export default function Btns() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <ul className={styles.btns}>
            <li className={styles.btnsLi}>
              <Link to="/services" className={styles.btnsBtn}>
                <img src={image1} alt="" className={styles.btnsImage} />
                <p>Services</p>
              </Link>
            </li>
            <li className={styles.btnsLi}>
              <Link to="/detail" className={styles.btnsBtn}>
                <img src={image2} alt="" className={styles.btnsImage} />
                <p>Free Quote</p>
              </Link>
            </li>
            <li className={styles.btnsLi}>
              <Link to="/services" className={styles.btnsBtn}>
                <img src={image3} alt="" className={styles.btnsImage} />
                <p>Management</p>
              </Link>
            </li>
            <li className={styles.btnsLi}>
              <Link to="/detail" className={styles.btnsBtn}>
                <img src={image4} alt="" className={styles.btnsImage} />
                <p>Rate</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
