import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}><Link href="/">
                    <Image src="/images/Isotipo_Negro.svg" alt="logo" width={37} height={31} priority />
                </Link></div>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem} onClick={() => handleClick('https://veterans-tools.solsuite.io/staking')}>STAKING</li>

                    <li className={styles.navItem} onClick={() => handleClick('')}>PROTOCOL</li>
                </ul>
                <div className={styles.actions}>
                    <button className={styles.button} onClick={() => handleClick('https://veterans-whitepaper.gitbook.io/veterans')}><a>WHITEPAPER</a></button>
                    <button className={styles.button}><a>COMING SOON...</a></button>
                </div>

            </nav>
        </>
    )
}

export default Navbar
