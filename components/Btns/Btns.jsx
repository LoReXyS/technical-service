import styles from './Btns.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import image1 from '../Btns/Imgs/IconContainer1.png'
import image2 from '../Btns/Imgs/IconContainer2.png'
import image3 from '../Btns/Imgs/IconContainer3.png'
import image4 from '../Btns/Imgs/IconContainer4.png'
export default function Btns() {
    return (
        <>
            < section className={styles.section}>
                <div className={styles.conatiner}>
                    <ul className={styles.btns}>
                        <li className={styles.btnsLi}>
                            <button className={styles.btnsBtn}>
                                <img src={image1} alt="s" className={styles.btnsImage} />
                                <p>Services</p></button></li>
                        <li className={styles.btnsLi}>
                            <button className={styles.btnsBtn}>
                                <img src={image2} alt="d" className={styles.btnsImage} />
                                <p>Free Quote</p></button></li>
                        <li className={styles.btnsLi}>
                            <button className={styles.btnsBtn}>
                                <img src={image3} alt="f" className={styles.btnsImage} />
                                <p>Management</p></button></li>
                        <li className={styles.btnsLi}>
                            <button className={styles.btnsBtn}>
                                <img src={image4} alt="g" className={styles.btnsImage} />
                                <p>Rate</p></button></li>
                    </ul>
                </div>
            </section>
        </>
    )
}
