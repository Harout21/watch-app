import React, {useState} from 'react'
import instIcon from './../../public/images/InstagramIcon.png'
import closeIcon from './../../public/images/closeIcon.png'
import arrowRight from './../../public/images/arrowRight.png'
import backIcon from './../../public/images/backIcon.png'

import Link from 'next/link'

import styles from './../../styles/popup.module.scss'
import onClickOutside from "react-onclickoutside";

function HamburgerP() {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [showPopupMenu, setshowPopupMenu] = useState(false);
    const [states, setStates] = useState(true);
    const [openCountry, setOpenCountry] = useState(false);
    const [activeCountryId, setActiveCountryId] = useState(0)
    const [activeCountry, setActiveCountry] = useState('United States')
    const [arr, setArr] = useState([
        {country: 'France', id: 1},
        {country: 'United States', id: 0},
        {country: 'Japan', id: 2},
        {country: 'Taiwan', id: 3}
    ])

    HamburgerP.handleClickOutside = () => {
        setshowPopupMenu(false);
        setHamburgerActive(false);
    }

    const hamburgerOpen = () => {
        setHamburgerActive(!hamburgerActive);
        setshowPopupMenu(!showPopupMenu)
    };

     const openContrySelector = () => {
         setStates(!states)
         setOpenCountry(!openCountry)
     };

    const handleClick = (id, country) => {
        setStates(!states)
        setActiveCountry(country)
        setActiveCountryId(id)
    };


    return (

        <div className={styles.menuBlockRight}>
            <div className={styles.hamburgerMbMenu} onClick={hamburgerOpen}>
                <span className={!hamburgerActive ? styles.hamburger1 : styles.hamburger11}/>
                <span className={!hamburgerActive ? styles.hamburger2 : styles.hamburger22}/>
                <span className={!hamburgerActive ? styles.hamburger3 : styles.hamburger33}/>
            </div>
            {
                showPopupMenu &&
                <div className={styles.popupR}>
                    <button className={styles.popupR__mobile__close} onClick={hamburgerOpen}> <img src={closeIcon} alt="close btn"/></button>
                    {
                        openCountry ?
                            <>
                                <div className={styles.popupR__Language}>
                                    <p className={styles.popupR__Language__btn} onClick={() => openContrySelector()}><img src={backIcon} alt="back Icon"  className={styles.popupR__mobile__back__arrow}/>Back</p>
                                    {
                                        arr.map((item)=>{
                                            return(
                                                <p className={(item.id === activeCountryId) ? styles.popupR__Language__btn__active : styles.popupR__Language__btn } onClick={() => handleClick(item.id, item.country)} key={item.id}>{item.country}</p>
                                            )
                                        })
                                    }
                                </div>
                            </>
                            :
                            <>
                                <ul  className={styles.popupR__mobile}>
                                    <li>
                                        <Link href='/OurStory' passHref={true}>Leviathan</Link>
                                    </li>
                                    <li>
                                        <Link href='/OurStory' passHref={true}>Hypersport</Link>
                                    </li>
                                    <li>
                                        <Link href='/OurStory' passHref={true}>Minimalistic</Link>
                                    </li>
                                    <li>
                                        <Link href='/OurStory' passHref={true}>Project Sky Three</Link>
                                    </li>
                                    <li>
                                        <Link href='/OurStory' passHref={true}>Sl600Mi Mini Itx</Link>
                                    </li>
                                </ul>

                                <Link href='/OurStory' passHref={true} className={styles.popupR__mobile__item}>Support</Link>
                                <Link href='/Product' passHref={true} className={styles.popupR__mobile__item}>Warranty</Link>
                                <button className={styles.popupR__btn} onClick={() => setStates(!states)}>Sign In</button>
                                <button className={styles.popupR__btn} onClick={() => openContrySelector()}>{activeCountry}<img src={arrowRight} alt={'arrowRight'} className={styles.popupR__mobile__arrow}/></button>
                                <Link href='/instIcon' passHref={true}><img src={instIcon} alt='inst icon' className={styles.popupR__icon}/></Link>
                            </>
                    }

                </div>
            }
        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () =>
        HamburgerP.handleClickOutside,
};

export default onClickOutside(HamburgerP, clickOutsideConfig)
