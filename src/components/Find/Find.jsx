import { Link } from 'react-router-dom';
import styles from './Find.module.css';
export default function Find() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.txt}>Find what Service Do you need Today</h1>
                        <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ipsam delectus magni placeat voluptates cum nemo, minima, asperiores eum quas dolore ipsum quos itaque temporibus modi deleniti nulla reiciendis, tempora totam?
                        </p>
                    </div>
                    <Link to="/services" className={styles.btn}>Explore Services</Link>
                </div>
            </section>
        </>
    )
}
