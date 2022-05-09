import React from 'react'
import {useSelector} from "react-redux";

import styles from './../../styles/partners.module.scss'

function Partners() {
    const fetchedData = useSelector(state => state.fetchDataReducer?.data?.acf)

    return (
        <section className={styles.Partners}>
            {
                fetchedData?.footer_main_logo?.url ?
                    <>
                        <div className={styles.Partners__container}>
                            <img src={fetchedData?.footer_main_logo?.url} alt='partnersLogo'
                                 className={styles.Partners__logo}/>
                            <div className={styles.Partners__block}>
                                <img src={fetchedData?.footer_logo_1?.url} className={styles.Partners__item}
                                     alt='Partner_logo'/>
                                <img src={fetchedData?.footer_logo_2?.url} className={styles.Partners__item}
                                     alt='Partner logo'/>
                                <img src={fetchedData?.footer_logo_3?.url} className={styles.Partners__item}
                                     alt='Partner logo'/>
                                <img src={fetchedData?.footer_logo_4?.url} className={styles.Partners__item}
                                     alt='Partner logo'/>
                                <img src={fetchedData?.footer_logo_5?.url} className={styles.Partners__item}
                                     alt='Partner logo'/>
                            </div>
                            <h2 className={styles.Partners__title}>{fetchedData?.footer_question_title}</h2>
                            <p className={styles.Partners__text}>{fetchedData?.footer_description}</p>
                            <button className={styles.Partners__button}>{fetchedData?.footer_button_text}</button>
                        </div>
                    </> : ""
            }
        </section>
    )
}

export default Partners
