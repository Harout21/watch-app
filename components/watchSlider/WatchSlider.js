import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getDataAction} from "../../redux/fetchDataHomepage/actions";
import {getWatchesAction} from "../../redux/fetchWatchPhotos/actions";
import dynamic from "next/dynamic";

import styles from './../../styles/watchSlider.module.scss'
import Loading from "../loading/loading";
import Timer from "../Timer/Timer";

function WatchSlider() {
    const [displaySlider, setDisplaySlider] = useState(false)
    const [productState, setProductState] = useState(3)
    const fetchedData = useSelector(state => state.fetchDataReducer?.data?.acf)
    const getWatches = useSelector(state => state.fetchWatchPhotosReducer?.watchesPhotos)
    const dispatch = useDispatch()
    const watchesArray = Object.values(getWatches || {})

    const OwlCarousel = dynamic(import("react-owl-carousel"), {
        ssr: false,
    });


    const options = {
        items: 5,
        center: true,
        lazyLoad: true,
        touchDrag: true,
        nav: true,
        mouseDrag: true,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
                margin: 10,
            },
            750: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
        onClick: (e) => clickWatchOnSlider(e)
    };

    const clickWatchOnSlider = (e) => {
        const [block, next, prev] = [$(e.target).closest('.owl-item'), $('.owl-next'), $('.owl-prev')];
        const [prevBlock, nextBlock] = [block.prev(), block.next()];

        if (nextBlock.hasClass('active') && nextBlock.hasClass('center')) {
            prev.click();
        }

        if (nextBlock.next().hasClass('active') && nextBlock.next().hasClass('center')) {
            prev.click().click();
        }

        if (prevBlock.hasClass('active') && prevBlock.hasClass('center')) {
            next.click();
        }

        if (prevBlock.prev().hasClass('active') && prevBlock.prev().hasClass('center')) {
            next.click().click();
        }
    }

    useEffect(() => {
        setDisplaySlider(true);
        // dispatch(getDataAction())
        // dispatch(getWatchesAction())
        document.documentElement.lang = "en-us";
    }, [])


    return (
        <div className={styles.WatchSlider__main}>
            <div className={styles.WatchSlider}>
                <div tabIndex='1' className='sliderBox'>
                    <div className='sliderBox' className={styles.slider}>
                        <div className='sliderBoxTitle'>
                            <p className={styles.WatchSlider__supTitle}>New CMODX Edition</p>
                            <h1 className={styles.WatchSlider__Title}>exclusive pc builds</h1>
                        </div>
                        <Timer productState={productState} time={'2021-11-04T14:51:06.157Z'}/>
                        {
                            displaySlider && watchesArray?.length ?
                                <OwlCarousel {...options}>
                                    {
                                        watchesArray?.length ? watchesArray.map((item, key) => {
                                            return <div key={key}>
                                                <div className='WatchSlider__container-box'>
                                                    <div className='WatchSlider__content'>
                                                        <img src={fetchedData?.slider_main_logo_2?.url} alt='AK logo'
                                                             className={styles.WatchSlider__content__img}/>
                                                        <h2 className={styles.WatchSlider__title}>{item?.title}</h2>
                                                    </div>
                                                    <div className='WatchSlider__content__button'>
                                                        <div className={styles.WatchSlider__buttons}>
                                                            <button
                                                                className={productState === 1 ? styles.WatchSlider__button__color : 'displayNone'}>
                                                                <p className={styles.WatchSlider__button__color__inner}>Build
                                                                    yours</p>
                                                            </button>
                                                            <button
                                                                className={productState === 1 ? styles.WatchSlider__button__color : 'displayNone'}>
                                                                <p className={styles.WatchSlider__button__color__inner}>Learn
                                                                    more</p>
                                                            </button>
                                                            <button
                                                                className={productState === 2 ? styles.WatchSlider__button__color : 'displayNone'}>
                                                                <p className={styles.WatchSlider__button__color__inner}>Get
                                                                    notify</p>
                                                            </button>
                                                            <button
                                                                className={productState === 3 ? styles.WatchSlider__button__color : 'displayNone'}>
                                                                <p className={styles.WatchSlider__button__color__inner}>Add
                                                                    to calendar</p>
                                                            </button>
                                                            <div
                                                                className={productState === 4 ? styles.WatchSlider__button : 'displayNone'}/>
                                                        </div>
                                                    </div>
                                                    <p className={styles.WatchSlider__nameTitle}>{item?.title}</p>
                                                    <img
                                                        className={styles.slider__item}
                                                        src={item?.url}
                                                        alt={item?.name}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        }) : ""
                                    }
                                </OwlCarousel> : <Loading/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchSlider
