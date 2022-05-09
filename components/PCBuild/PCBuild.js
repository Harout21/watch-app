import React from 'react'
import Link from 'next/link'

import instIcon from './../../public/images/instIcon.png'

import styles from './../../styles/pcBuild.module.scss'
import {useSelector} from "react-redux";

function PCBuild() {
    const fetchedData = useSelector(state => state.fetchDataReducer.data.acf)

    return (
        <section className={styles.PCBuild}>
            {
                fetchedData?.about_2_title ?
                    <>
                        <div className={styles.PCBuild__header}>
                            <h2 className={styles.PCBuild__title}>{fetchedData?.about_2_title}</h2>
                            <p className={styles.PCBuild__description}>{fetchedData?.about_2_description}</p>
                        </div>
                        <div className={styles.PCBuild__largeImg}>
                            <picture className={styles.PCBuild__Img}>
                                <source media="(min-width:650px)" srcSet={fetchedData?.about_2_image?.url}/>
                                <source media="(min-width:465px)"  srcSet={fetchedData?.about_2_image?.url}/>
                                <img src={fetchedData?.about_2_image?.url} alt='PC-img' className={styles.PCBuild__Img}/>
                            </picture>
                            <Link className='PCBuild__link' passHref={true} href='/'>
                                <a>
                                    <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                                    CMODX
                                </a>
                            </Link>
                        </div>
                        <div className={styles.PCBuild__container}>
                            <div className={styles.PCBuild__leftImg}>
                                <picture className={styles.PCBuild__Img}>
                                    <source media="(min-width:650px)" srcSet={fetchedData?.about_3_image?.url}/>
                                    <source media="(min-width:465px)"  srcSet={fetchedData?.about_3_image?.url}/>
                                    <img src={fetchedData?.about_3_image?.url} alt='PC-img' className={styles.PCBuild__Img}/>
                                </picture>
                                <p className={styles.PCBuild__text}>{fetchedData?.about_3_description}</p>
                                <Link className='PCBuild__link' passHref={true} href='/'>
                                    <a>
                                        <img src={instIcon} className='PCBuild__link__img' layout="fill"
                                             alt='instIcon'/>
                                        CMODX
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.PCBuild__rightImg}>
                                <picture className={styles.PCBuild__Img}>
                                    <source media="(min-width:650px)" srcSet={fetchedData?.about_4_image?.url}/>
                                    <source media="(min-width:465px)"  srcSet={fetchedData?.about_4_image?.url}/>
                                    <img src={fetchedData?.about_4_image?.url} alt='PC-img' className={styles.PCBuild__Img}/>
                                </picture>
                                <p className={styles.PCBuild__text}>{fetchedData?.about_4_description}</p>
                                <Link className='PCBuild__link' passHref={true} href='/'>
                                    <a>
                                        <img src={instIcon} className='PCBuild__link__img' layout="fill"
                                             alt='instIcon'/>
                                        CMODX
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.PCBuild__rightImg__mobile}>
                                <picture className={styles.PCBuild__Img}>
                                    <source media="(min-width:650px)" srcSet={fetchedData?.about_4_image?.url}/>
                                    <source media="(min-width:465px)"  srcSet={fetchedData?.about_4_image?.url}/>
                                    <img src={fetchedData?.about_4_image?.url} alt='PC-img' className={styles.PCBuild__Img}/>
                                </picture>
                                <p className={styles.PCBuild__text}>{fetchedData?.about_4_description}</p>
                                <Link className='PCBuild__link' passHref={true} href='/'>
                                    <a>
                                        <img src={instIcon} className='PCBuild__link__img' layout="fill"
                                             alt='instIcon'/>
                                        CMODX
                                    </a>
                                </Link>
                            </div>
                        <div className={styles.PCBuild__largeImgBottom}>
                            <picture className={styles.PCBuild__Img}>
                                <source media="(min-width:650px)" srcSet={fetchedData?.about_5_image?.url}/>
                                <source media="(min-width:465px)"  srcSet={fetchedData?.about_5_image?.url}/>
                                <img src={fetchedData?.about_5_image?.url} alt='PC-img' className={styles.PCBuild__Img}/>
                            </picture>
                            <p className={styles.PCBuild__text}>{fetchedData?.about_5_description}</p>
                            <Link className='PCBuild__link' passHref={true} href='/'>
                                <a>
                                    <img src={instIcon} className='PCBuild__link__img' layout="fill" alt='instIcon'/>
                                    CMODX
                                </a>
                            </Link>
                        </div>
                        <div className={styles.PCBuild__empty}/>
                    </> : ""
            }
        </section>
    )
}

export default PCBuild
