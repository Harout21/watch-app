import React, {useState} from 'react'
import Link from 'next/link'

import styles from '../../styles/popup.module.scss'

function ProductPopUp(){
    const [showPopUp, setShowPopup] = useState(false)
    ProductPopUp.handleClickOutside = () => setShowPopup(false);

    return(
        <li className={styles.menuBlock} onMouseLeave={()=>setShowPopup(false)} onMouseOver={()=>setShowPopup(true)} >
            Product
            {
                showPopUp &&
                <div className={styles.popup}>
                    <Link className={styles.popup__link} passHref={true} href='/Minimalistic'>Minimalistic</Link>
                    <Link className={styles.popup__link} passHref={true} href='/Leviathan'>Leviathan</Link>
                    <Link className={styles.popup__link} passHref={true} href='/Hypersport'>Hypersport</Link>
                    <Link className={styles.popup__link} passHref={true} href='/ProjectSkyThree'>Project Sky Three</Link>
                    <Link className={styles.popup__link} passHref={true} href='/Sl600MiMiniItx'>Sl600Mi Mini Itx</Link>
                </div>
            }
        </li>
    )
}

export default ProductPopUp

