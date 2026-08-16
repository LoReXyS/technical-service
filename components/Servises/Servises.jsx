import styles from './Servises.module.css'
import ServisesList from '../ServisesList/ServisesList'
import Coments from '../Coments/Coments'
import Questions from '../Questions/Questions'
import Find from '../Find/Find'

export default function Servises() {
    return (
        <>
            <section className={styles.Servises}>
                <div className={styles.container}>
                    <h1 className={styles.txt}>Featured Services</h1>
                    <ul className={styles.servisesList}>
                        <li className={styles.servisesItem} ><p className={styles.servisesP}>Lorem ipsum dolor sit amet. Ut galisum corporis est sunt excepturi et praesentium eligendi eum recusandae quisquam et velit nisi. Qui aspernatur libero ut placeat Quis ad expedita iure vel accusamus dolor qui sequi incidunt et tempore vero. Sit soluta totam ut sapiente delectus vel fuga rerum ad voluptates sunt ut consequatur facere aut vitae accusantium qui voluptas voluptas.</p></li>
                        <li className={styles.servisesItem}><button className={styles.servisesBtn}><a href="" className={styles.servisesA}>View All Services</a></button></li>
                    </ul>
                </div>
            </section>
            <ServisesList />
            <section className={styles.servisesComents}>
                <div className={styles.container}>
                    <h1 className={styles.txt}>What Our Clients Say</h1>
                    <ul className={styles.servisesList}>
                        <li className={styles.servisesItem} >
                            <p className={styles.servisesP}>Read the success stories and heartfelt testimonials from our valued clients.</p>
                        </li>
                        <li className={styles.servisesItem}><button className={styles.servisesBtn}><a href="" className={styles.servisesA}>View All Services</a></button></li>
                    </ul>
                </div>
            </section>
            <Coments />
            <section className={styles.servisesQuestions}>
                <div className={styles.container}>
                    <h1 className={styles.txt}>Frequently Asked Questions</h1>
                    <ul className={styles.servisesList}>
                        <li className={styles.servisesItem} >
                            <p className={styles.servisesP}>Hic voluptatem sapiente id galisum omnis aut accusamus natus aut quia consequatur. </p>
                        </li>
                        <li className={styles.servisesItem}><button className={styles.servisesBtn}><a href="" className={styles.servisesA}>View All FAQ’s</a></button></li>
                    </ul>
                </div>
            </section>
            <Questions />
            <Find />
        </>
    )
}
