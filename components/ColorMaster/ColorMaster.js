import React from 'react'
import {useSelector} from "react-redux";

import styles from './../../styles/colorMaster.module.scss'

import dynamic from "next/dynamic";

const Scroll = dynamic(
    () => {
        return import("../Scroll/Scroll");
    },
    {ssr: false}
);


function ColorMaster({imgRef}) {
    const fetchedData = useSelector(state => state.fetchDataReducer.data.acf)

    return (
        <section className={styles.colorMaster}>
            {
                fetchedData?.about_1_bg_image?.url ?
                    <>
                        <div className={styles.colorMaster__container} ref={imgRef}>
                            <img src={fetchedData?.about_1_bg_image?.url}
                                 className={styles.colorMaster__bg}
                                 alt={fetchedData?.about_1_bg_image?.name}
                            />
                            <div className={styles.colorMaster__content}>
                                {
                                    fetchedData?.about_1_title ?
                                        <>
                                            <h2 className={styles.colorMaster__title}>{fetchedData?.about_1_title}</h2>
                                            <p className={styles.colorMaster__text}>{fetchedData?.about_1_description}</p>
                                        </> : ""
                                }
                            </div>
                        </div>
                    </> : ""
            }
            <Scroll imgRef={imgRef}/>
        </section>
    )
}

export default ColorMaster
