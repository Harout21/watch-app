import React from 'react'
import Link from 'next/link'
import arrowRight from './../../public/images/arrowAbout.png'
import styles from '../../styles/aboutWatchs.module.scss'
import {useSelector} from "react-redux";

function AboutWatchs() {
    const fetchedData = useSelector(state => state.fetchDataReducer.data.acf)

    return (
        <div className={styles.AboutWatchs__container__main}>
            <div className={styles.AboutWatchs__container}>
                <section className={styles.AboutWatchs}>
                    <article className={styles.AboutWatchs__item}>
                        {
                            fetchedData?.box_1_logo?.url ?
                                <>
                                    <img src={fetchedData?.box_1_logo?.url} alt='powered-icon' layout='fill'
                                         className={styles.AboutWatchs__icon} />
                                    <h1 className={styles.AboutWatchs__title}>{fetchedData?.box_1_title}</h1>
                                    <p className={styles.AboutWatchs__text}>{fetchedData?.box_1_description}</p>
                                    <Link className={styles.AboutWatchs__link} href='/' as='/Learn more'><a>Learn
                                        more<img src={arrowRight}
                                                 className={styles.AboutWatchs__arrow__icon} alt="arrowRightIcon"/></a></Link>

                                </> : ""
                        }
                    </article>
                    <article className={styles.AboutWatchs__item}>
                        {
                            fetchedData?.box_2_logo?.url ?
                                <>
                                    <img src={fetchedData?.box_2_logo?.url} alt='powered-icon' layout='fill'
                                         className={styles.AboutWatchs__icon}/>
                                    <h1 className={styles.AboutWatchs__title}>{fetchedData?.box_2_title}</h1>
                                    <p className={styles.AboutWatchs__text}>{fetchedData?.box_2_description}</p>
                                    <Link className={styles.AboutWatchs__link} href='/Learn more' as='/'><a>Learn
                                        more<img
                                            src={arrowRight} className={styles.AboutWatchs__arrow__icon} alt="arrowRightIcon"/></a></Link>
                                </> : ""
                        }

                    </article>
                    <article className={styles.AboutWatchs__item}>
                        {
                            fetchedData?.box_3_logo?.url ?
                                <>
                                    <img src={fetchedData?.box_3_logo?.url} alt='powered-icon' layout='fill'
                                         className={styles.AboutWatchs__icon}/>
                                    <h1 className={styles.AboutWatchs__title}>{fetchedData?.box_3_title}</h1>
                                    <p className={styles.AboutWatchs__text}>{fetchedData?.box_3_description}</p>
                                    <Link className={styles.AboutWatchs__link} href='/' as='/Learn more'><a>Learn
                                        more<img
                                            src={arrowRight} className={styles.AboutWatchs__arrow__icon} alt="arrowRightIcon"/></a></Link>
                                </> : ""
                        }
                    </article>
                </section>
            </div>
        </div>
    )
}

export default AboutWatchs
