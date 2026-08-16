import styles from './ServisesList.module.css'
import img1 from './imgs/air_conditioning.png'
import img2 from './imgs/painting.png'
import img3 from './imgs/plumbing.png'
import {
    useLocation,
    useNavigate,
    useParams,
    NavLink,
    Link
} from 'react-router-dom';
export default function ServisesList() {
    return <>
        <section className={styles.section}>
            <h2></h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img src={img1} alt="img1" className={styles.itemImg} />
                        <h3 className={styles.itemTxt}>Air condition Repairing and Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><a href="" className={styles.itemReadrMore}> Read More</a></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Repair</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Brand New</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Other Services</button></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}>
                                <button className={styles.priceBtn}>
                                    <nav>
                                        <Link to={"/"} className={styles.linkTo} >View Details</Link >
                                    </nav>
                                </button></li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <img src={img3} alt="img3" className={styles.itemImg} />
                        <h3 className={styles.itemP}>Plumbing Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><a href="" className={styles.itemReadrMore}> Read More</a></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Maintenance</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Heater</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Water Line</button></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}><button className={styles.priceBtn}><nav><Link to={"/"} className={styles.linkTo}>View Details</Link ></nav> </button></li>
                        </ul>
                    </li>
                    <li className={styles.listItem}>
                        <img src={img2} alt="img2" className={styles.itemImg} />
                        <h3 className={styles.itemTxt}>Painting Services</h3>
                        <p className={styles.itemP}>Lorem ipsum dolor sit amet.
                            Hic temporibus incidunt qui illo inventore eos impedit amet 33 enim neque hic aliquam veritatis.
                            <span><a href="" className={styles.itemReadrMore}> Read More</a></span></p>
                        <ul className={styles.listBtn}>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Colors</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Maintenance</button></li>
                            <li className={styles.btnItem}><button className={styles.btnItemBtn}>Repaint</button></li>
                        </ul>
                        <ul className={styles.listPrice}>
                            <li className={styles.priceItem}>
                                <p className={styles.priceItemP}>Price</p>
                                <h3 className={styles.priceItemTxt}>$000,000</h3>
                            </li>
                            <li className={styles.priceItem}><button className={styles.priceBtn}><nav><Link to={"/"} className={styles.linkTo}>View Details</Link ></nav> </button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    </>
}
