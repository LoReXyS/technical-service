import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import image from '../Header/Img/logo-modified.png';
import dataLogs from './HeaderData';

export default function Header() {
  const routes = ['/', '/about', '/detail', '/services'];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <ul className={styles.upperList}>
            <li className={styles.upperItem}>
              <p className={styles.upperTxt}>
                ✨Discover Your Dream Service with CTS
              </p>
            </li>
            <li className={styles.upperItem}>
              <Link to="/services" className={styles.upperA}>
                Learn More
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.lower}>
          <Link to="/" className={styles.logoLink} aria-label="CTS home">
            <img src={image} alt="CTS" className={styles.lowerImg} />
          </Link>
          <nav className={styles.lowerNav}>
            <ul className={styles.lowerList}>
              {dataLogs.map((item, index) => (
                <li className={styles.lowerItem} key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.lowerA}${isActive ? ` ${styles.active}` : ''}`
                    }
                    to={routes[index]}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/detail" className={`${styles.lowerBtn} ${styles.lowerA}`}>
              Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
