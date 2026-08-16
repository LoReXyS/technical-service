import styles from './Questions.module.css'

export default function Questions() {
    return (
        <>
            <section className={styles.section}>
                <h2></h2>
                <div className={styles.container}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <h2 className={styles.txt}>How many minutes or days usually?
                            </h2>
                            <p className={styles.paragraph}>Hic voluptatem sapiente id galisum omnis aut accusamus natus aut quia consequatur.
                            </p>
                            <button className={styles.btn}>Read More</button>
                        </li>
                        <li className={styles.item}>
                            <h2 className={styles.txt}>Is the quotations are accurate?
                            </h2>
                            <p className={styles.paragraph}>Hic voluptatem sapiente id galisum omnis aut accusamus natus aut quia consequatur. </p>
                            <button className={styles.btn}>Read More</button>
                        </li>
                        <li className={styles.item}>
                            <h2 className={styles.txt}>How can I trust you?</h2>
                            <p className={styles.paragraph}>Hic voluptatem sapiente id galisum omnis aut accusamus natus aut quia consequatur. </p>
                            <button className={styles.btn}>Read More</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
