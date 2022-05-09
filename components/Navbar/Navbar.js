import React from 'react';
import Link from 'next/link'

import ProductP from '../PopUp/ProductP'
import HamburgerP from '../PopUp/HamburgerP'
import CardP from '../PopUp/CardP'
import styles from '../../styles/navbar.module.scss'
import {useSelector} from "react-redux";

function Navbar() {
    const fetchedData = useSelector(state => state.fetchDataReducer.data.acf)

    return (
        <>
            <section className={styles.menu}>
                {
                    fetchedData?.main_site_logo?.url ?
                        <>
                            <div className={styles.menuContainerBlock}>
                                <img src={fetchedData?.main_site_logo?.url} className={styles.menuLogo} alt='logo'/>
                                <nav className={styles.menuNavigation}>
                                    <ul className={styles.menuContainer}>
                                        <li className={styles.menuBlock}>
                                            <Link href='/ourstory' passHref={true}>Our Story</Link>
                                        </li>
                                        <ProductP/>
                                        <li className={styles.menuBlock}>
                                            <Link href='/FAQ' passHref={true} className={styles.menu__item}>FAQ</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className={styles.menuTool}>
                                    <CardP/>
                                    <HamburgerP/>
                                </div>

                            </div>
                        </> : ""
                }
            </section>
        </>
    );
}


export default Navbar
