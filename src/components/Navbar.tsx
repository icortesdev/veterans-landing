import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

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
                alt="logo"
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

const Actions = () => (
    <div className={styles.actions}>
        <ActionButton url="https://veterans-whitepaper.gitbook.io/veterans" label="WHITEPAPER" />
        <ActionButton url="#" label="COMING SOON..." />
    </div>
);

const ActionButton = ({ url, label }: { url: string, label: string }) => (
    <button className={styles.button} onClick={() => window.open(url, '_blank')}>
        <a>{label}</a>
    </button>
);

export default Navbar;
