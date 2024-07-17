import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {

    const handleRedirect = (url: string) => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <>

            <footer className={styles.footer}>
                <Image className={styles.vector9} src="/images/Vector 9.png" alt="margen" width={100000} height={900} />
                <div className={styles.icons}>

                    <Image className={styles.iconX} src="/images/Icono_X.svg" alt="X" width={30} height={30} />
                    <Image className={styles.iconDiscord} src="/images/Icono_Discor.svg" alt="Discord" width={30} height={30} />
                    <Image className={styles.iconExchangeArt} src="/images/Icono_Exchange Art.svg" alt="ExchangeArt" width={30} height={30} />
                    <Image className={styles.iconAtlas} src="/images/Icono_Atlas.svg" alt="Atlas" width={30} height={25} />
                </div>
                <div className={styles.links}>
                    <a href="/">HOME</a> / <a href="/linking">LINKING</a> / <a href="/inventory">INVENTORY</a>
                </div>
                <div className={styles.copyright}>
                    <Image className={styles.logo} src="/images/Isotipo_Negro.svg" alt="X" width={25} height={30} />
                    <p>&copy; 2023 Veterans. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
