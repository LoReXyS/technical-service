import styles from './Footer.module.css'
import image from './Img/logo-modified.png'
import tg from './Img/tg.png'
import email from './Img/email.png'
import {
    useLocation,
    useNavigate,
    useParams,
    NavLink,
    Link
} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import AboutUs from '../../pages/AboutUs/AboutUs';
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles.containter} ${styles.content}`}>
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
                                <NavLink to={"/"} className={styles.navLinkItem} >Home</NavLink >
                            </nav>
                            <a href='' className={styles.secondA}>Hero Section</a>
                            <a href='' className={styles.secondA}>Features</a>
                            <a href='' className={styles.secondA}>Services</a>
                            <a href='' className={styles.secondA}>Rates</a>
                            <a href='' className={styles.secondA}>FAQ’s</a>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <NavLink to={"/aboutUs"} className={styles.navLinkItem} >About Us</NavLink >
                            </nav>

                            <a href='' className={styles.secondA}>Our Story</a>
                            <a href='' className={styles.secondA}>Our Works</a>
                            <a href='' className={styles.secondA}>How It Works</a>
                            <a href='' className={styles.secondA}>Our Team</a>
                            <a href='' className={styles.secondA}>Our Clients</a>

                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <NavLink to={'/'} className={styles.navLinkItem}>Details</NavLink >
                            </nav>
                            <a href="" className={styles.secondA}>Portfolio</a>
                            <a href="" className={styles.secondA}>Categories</a>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <NavLink to={'/'} className={styles.navLinkItem}>Services</NavLink >
                            </nav>
                            <a href="" className={styles.secondA}>Air Condition Repairing</a>
                            <a href="" className={styles.secondA}>Plumbing</a>
                            <a href="" className={styles.secondA}>Painting</a>
                            <a href="" className={styles.secondA}>Electrical</a>
                            <a href="" className={styles.secondA}>Refrigerator Repairing </a>
                            <a href="" className={styles.secondA}>Handyman Services</a>
                            <a href="" className={styles.secondA}>Wood Services </a>
                            <a href="" className={styles.secondA}>Tile Fixing</a>
                        </li>
                        <li className={styles.secondItem}>
                            <nav>
                                <NavLink to={'/'} className={styles.navLinkItem}>Contact Us</NavLink >
                            </nav>
                            <a href="" className={styles.secondA}>Contact Form</a>
                            <a href="" className={styles.secondA}>Contact Number</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
