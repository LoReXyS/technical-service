import styles from './Header.module.css'
import {
    useLocation,
    useNavigate,
    useParams,
    NavLink,
    Link
} from 'react-router-dom';
import image from '../Header/Img/logo-modified.png'
import dataLogs from './HeaderData'

export default function Header() {
    const data = dataLogs
    const routes = ['/', '/about', '/detail', '/services'];
    console.log(data);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.upper}>
                    <ul className={styles.upperList}>
                        <li className={styles.upperItem}><p className={styles.upperTxt}>✨Discover Your Dream Service with CTS</p></li>
                        <li className={styles.upperItem}><a href="" className={styles.upperA}>Learn More</a></li>
                    </ul>
                </div>
                <div className={styles.lower}>
                    <img src={image} alt="images" className={styles.lowerImg} />
                    <nav className={styles.lowerNav}>
                        <ul className={styles.lowerList}>
                            {data.map((item, index) => (
                                <li className={styles.lowerItem} key={index}><button className={styles.lowerBtn}><Link className={styles.lowerA} to={routes[index]}>{item}</Link></button></li>
                            ))}
                        </ul>
                    </nav>
                    <button className={styles.lowerBtn}><a href="" className={styles.lowerA}>Contact Us</a></button>
                </div>
            </div>
        </header >
    )
}
