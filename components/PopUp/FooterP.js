import React, {useState} from 'react'
import onClickOutside from "react-onclickoutside";
import arrow from './../../public/images/arrow.png'

import styles from './../../styles/popup.module.scss'

function Footer() {
    const [showPopUp, setShowPopup] = useState(false)
    const [activeCountryId, setActiveCountryId] = useState(0)
    const [activeCountry, setActiveCountry] = useState('United States')
    Footer.handleClickOutside = () => setShowPopup(false);
    const [arr, setArr] = useState([
        {country: 'United States', id: 0},
        {country: 'Country 1', id: 1},
        {country: 'Country 2', id: 2},
        {country: 'Country 3', id: 3}
        ])

    const handleClick = (id, country) => {
        setActiveCountry(country)
        setActiveCountryId(id)
        setShowPopup(false)
    };

    return (

        <div className={styles.footer__select}>
            <div className={styles.footer__select__box} onClick={() => setShowPopup(true)}>
                <p className={styles.footer__drop}>{activeCountry} <img
                    className={showPopUp ? styles.footer__arrow : styles.footer__arrowActive} src={arrow} alt="country"/></p>
            </div>
            {
                showPopUp &&
                <div className={styles.popupF}>
                    {
                        arr.map((item) => {
                            return (
                                <p className={(item.id === activeCountryId) ? styles.popupF__item__active : styles.popupF__item}
                                   onClick={() => handleClick(item.id, item.country)} key={item.id}>{item.country}</p>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () =>
        Footer.handleClickOutside,
};

export default onClickOutside(Footer, clickOutsideConfig)
