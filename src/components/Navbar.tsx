import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Actions from '../Actions/Actions';

interface ActionButtonProps {
    url: string;
    label: string;
    disabled?: boolean; // Hacer que disabled sea opcional
}

const Navbar = () => {

    
    return (
        <nav className={styles.navbar}>
            <Logo />
            <NavLinks />
            <Actions />
        </nav>
    );
};

const Logo = () => (
    <div className={styles.logo}>
        <Link href="/">
            <Image
                src="/images/Isotipo_Negro.svg"
                alt="logoVeterans"
                width={37}
                height={31}
                priority
            />
        </Link>
    </div>
);

const NavLinks = () => (
    <ul className={styles.navLinks}>
        <NavItem url="https://veterans-tools.solsuite.io/staking" label="STAKING" />
        <NavItem url="" label="PROTOCOL" />
    </ul>
);

const NavItem = ({ url, label }: { url: string, label: string }) => (
    <li className={styles.navItem} onClick={() => window.open(url, '_blank')}>
        {label}
    </li>
);



export default Navbar;
