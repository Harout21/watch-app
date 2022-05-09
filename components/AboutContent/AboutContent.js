import React from 'react'

import {useSelector} from "react-redux";
import styles from '../../styles/aboutContent.module.scss'

function AboutContent() {
    const fetchedData = useSelector(state => state.fetchDataReducer.data.acf)

    return (
        <div className={styles.aboutContent__main}>
            {
                fetchedData?.first_post_slider_bg_image?.url ?
                    <>
                        <section className={styles.aboutContent}>
                            {/*<img src={fetchedData?.first_post_slider_bg_image?.url}*/}
                            {/*     className={styles.aboutContent__bg} alt={fetchedData?.first_post_slider_bg_image?.name}/>*/}
                                 <video loop autoPlay muted className={styles.aboutContent__bg}>
                                     <source src={fetchedData?.first_post_slider_bg_video?.url}  type="video/mp4"
                                     />
                                 </video>
                            <div className={styles.aboutContent__Container}>
                                {
                                    fetchedData?.made_by_short_description ?
                                        <>
                                            <p className={styles.aboutContent__subTitle}>{fetchedData?.made_by_short_description}</p>
                                            <h2 className={styles.aboutContent__title}>{fetchedData?.first_post_slider_title}</h2>
                                            <p className={styles.aboutContent__text}>{fetchedData?.first_post_slider_description}</p>
                                            <button
                                                className={styles.aboutContent__btn}>{fetchedData?.first_post_slider_button}</button>
                                        </> : ""
                                }
                            </div>
                        </section>
                    </> : ""
            }
        </div>
    )
}

export default AboutContent;
