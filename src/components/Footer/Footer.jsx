import styles from './Footer.module.css'
import image from './Img/logo-modified.png'
import tg from './Img/tg.png'
import email from './Img/email.png'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles.container} ${styles.content}`}>
                    <ul className={styles.firstList}>
                        <li className={styles.firstItem}><img src={image} alt="image" /></li>
                        <li className={styles.firstItem}>
                            <form className={styles.form}>
                                <img src={email} alt="" className={styles.image} /><input type="text" placeholder='Enter Your Email' className={styles.input} /><img src={tg} alt="" />
                            </form></li>
                    </ul>
                    <ul className={styles.secondList}>
                        <li className={styles.secondItem}>
                            <nav>
                                <Link to="/" className={styles.navLinkItem}>Home</Link>
                            </nav>
                            <Link to="/" className={styles.secondA}>Hero Section</Link>
                            <Link to="/services" className={styles.secondA}>Features</Link>
                            <Link to="/services" className={styles.secondA}>Services</Link>
                            <Link to="/detail" className={styles.secondA}>Rates</Link>
                            <Link to="/detail#questions" className={styles.secondA}>FAQ’s</Link>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <Link to="/about" className={styles.navLinkItem}>About Us</Link>
                            </nav>

                            <Link to="/about" className={styles.secondA}>Our Story</Link>
                            <Link to="/about" className={styles.secondA}>Our Works</Link>
                            <Link to="/about" className={styles.secondA}>How It Works</Link>
                            <Link to="/about" className={styles.secondA}>Our Team</Link>
                            <Link to="/about" className={styles.secondA}>Our Clients</Link>

                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <Link to="/detail" className={styles.navLinkItem}>Details</Link>
                            </nav>
                            <Link to="/detail" className={styles.secondA}>Portfolio</Link>
                            <Link to="/detail" className={styles.secondA}>Categories</Link>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <Link to="/services" className={styles.navLinkItem}>Services</Link>
                            </nav>
                            <Link to="/services" className={styles.secondA}>Air Condition Repairing</Link>
                            <Link to="/services" className={styles.secondA}>Plumbing</Link>
                            <Link to="/services" className={styles.secondA}>Painting</Link>
                            <Link to="/services" className={styles.secondA}>Electrical</Link>
                            <Link to="/services" className={styles.secondA}>Refrigerator Repairing</Link>
                            <Link to="/services" className={styles.secondA}>Handyman Services</Link>
                            <Link to="/services" className={styles.secondA}>Wood Services</Link>
                            <Link to="/services" className={styles.secondA}>Tile Fixing</Link>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <Link to="/detail" className={styles.navLinkItem}>Contact Us</Link>
                            </nav>
                            <Link to="/detail" className={styles.secondA}>Contact Form</Link>
                            <Link to="/detail" className={styles.secondA}>Contact Number</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
