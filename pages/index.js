import React, {useRef} from 'react'
import Footer from './../components/Footer/Footer';
import AboutWatchs from './../components/AboutWatchs/AboutWatchs';
import WatchSlider from './../components/watchSlider/WatchSlider';
import AboutContent from './../components/AboutContent/AboutContent';
import ColorMaster from './../components/ColorMaster/ColorMaster';
import PCBuild from './../components/PCBuild/PCBuild';
import Partners from './../components/Partners/Partners';
import Navbar from "../components/Navbar/Navbar";

import styles from '../styles/home.module.scss'

function Index() {

    const bgImage = useRef('')

    return (
        <div>
            <Navbar/>
            <div className={styles.sliderBlock}>
                <div className={styles.sliderBlock__main}>
                    <WatchSlider/>
                    <AboutWatchs/>
                </div>
            </div>
            <AboutContent/>
            <ColorMaster imgRef={bgImage}/>
            <PCBuild/>
            <Partners/>
            <Footer/>
        </div>
    )
}

export default Index
