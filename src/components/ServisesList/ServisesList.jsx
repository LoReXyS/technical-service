import { Link } from 'react-router-dom';
import styles from './ServisesList.module.css';
import img1 from './imgs/air_conditioning.png';
import img2 from './imgs/painting.png';
import img3 from './imgs/plumbing.png';

export default function ServisesList() {
    return <>
        <section className={styles.section}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src={img1} alt="Air conditioning service" className={styles.itemImg} />
                        <h3 className={styles.itemTxt}>Air condition Repairing and Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><Link to="/detail" className={styles.itemReadrMore}>Read More</Link></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Repair</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Brand New</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Other Services</span></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}>
                                <Link to="/detail" className={`${styles.priceBtn} ${styles.linkTo}`}>View Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <img src={img3} alt="Plumbing service" className={styles.itemImg} />
                        <h3 className={styles.itemTxt}>Plumbing Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><Link to="/detail" className={styles.itemReadrMore}>Read More</Link></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Maintenance</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Heater</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Water Line</span></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}><Link to="/detail" className={`${styles.priceBtn} ${styles.linkTo}`}>View Details</Link></li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <img src={img2} alt="Painting service" className={styles.itemImg} />
                        <h3 className={styles.itemTxt}>Painting Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><Link to="/detail" className={styles.itemReadrMore}>Read More</Link></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Colors</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Maintenance</span></li>
                            <li className={styles.btnItem}><span className={styles.btnItemBtn}>Repaint</span></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}><Link to="/detail" className={`${styles.priceBtn} ${styles.linkTo}`}>View Details</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    </>
}
