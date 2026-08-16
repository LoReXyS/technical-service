import img1 from './Imgs/Shape.png'
import styles from './Coments.module.css'
import profile1 from './Imgs/Profile.png'
import profile2 from './Imgs/Profile2.png'
import profile3 from './Imgs/Profile3.png'
export default function Coments() {
    return (
        <>
            <section className={styles.section}>
                <h2></h2>
                <div className={styles.container}>
                    <ul className={styles.lsit}>
                        <li className={styles.item}>
                            <ul className={styles.imgList}>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                            </ul>
                            <h3 className={styles.txt}>
                                Great Service!
                            </h3>
                            <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Libero fugit numquam aliquam cum amet vitae quam quis iusto tempora tempore?
                                Facere laboriosam commodi dolores neque architecto at illo, vero veritatis!</p>
                            <form className={styles.form}>
                                <img src={profile1} alt="profile1" />
                                <span className={styles.user}>
                                    <h3 className={styles.userTxt}>Marlvienne</h3>
                                    <p className={styles.userP}>Abu Dhabi, UAE</p>
                                </span>
                            </form>
                        </li>
                        <li className={styles.item}>
                            <ul className={styles.imgList}>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                            </ul>
                            <h3 className={styles.txt}>
                                Great Service!
                            </h3>
                            <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Libero fugit numquam aliquam cum amet vitae quam quis iusto tempora tempore?
                                Facere laboriosam commodi dolores neque architecto at illo, vero veritatis!</p>
                            <form className={styles.form}>
                                <img src={profile2} alt="profile2" />
                                <span className={styles.user}>
                                    <h3 className={styles.userTxt}>Carla</h3>
                                    <p className={styles.userP}>Dubai, UAE</p>
                                </span>
                            </form>
                        </li>
                        <li className={styles.item}>
                            <ul className={styles.imgList}>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                                <li className={styles.imgItem}><img src={img1} alt="stars" /></li>
                            </ul>
                            <h3 className={styles.txt}>
                                Great Service!
                            </h3>
                            <p className={styles.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Libero fugit numquam aliquam cum amet vitae quam quis iusto tempora tempore?
                                Facere laboriosam commodi dolores neque architecto at illo, vero veritatis!</p>
                            <form className={styles.form}>
                                <img src={profile3} alt="profile3" />
                                <span className={styles.user}>
                                    <h3 className={styles.userTxt}>Yen</h3>
                                    <p className={styles.userP}>Ras Al Khaimah, UAE</p>
                                </span>
                            </form>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
