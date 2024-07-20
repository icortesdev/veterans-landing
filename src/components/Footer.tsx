import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const socialLinks = [
    { src: "/images/Icono_X.svg", alt: "X", url: "https://twitter.com/veterans_crew", width: 30, height: 30 },
    { src: "/images/Icono_Discor.svg", alt: "Discord", url: "https://discord.com/invite/veterans", width: 30, height: 30 },
    { src: "/images/Icono_Exchange Art.svg", alt: "ExchangeArt", url: "https://exchange.art/veterans/nfts", width: 30, height: 30 },
    { src: "/images/Icono_Atlas.svg", alt: "Atlas", url: "https://atlas3.io/project/veterans", width: 30, height: 25 }
];

const handleRedirect = (url: string) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.opener = null;
};

const SocialIcons = () => (
    <div className={styles.icons}>
        {socialLinks.map((link, index) => (
            <Image
                key={index}
                className={styles[`icon${link.alt}`]}
                onClick={() => handleRedirect(link.url)}
                src={link.src}
                alt={link.alt}
                width={link.width}
                height={link.height}
            />
        ))}
    </div>
);

const FooterLinks = () => (
    <div className={styles.links}>
        <Link href="/">HOME</Link> / <Link href="/linking">LINKING</Link> / <Link href="/inventory">INVENTORY</Link>
    </div>
);

const Footer = () => (
    <footer className={styles.footer}>
        <Image
            className={styles.vector9}
            src="/images/Vector 9.png"
            alt="margen"
            width={100000}
            height={900}
        />
        <SocialIcons />
        <FooterLinks />
        <div className={styles.copyright}>
            <Image
                className={styles.logo}
                src="/images/Isotipo_Negro.svg"
                alt="X"
                width={25}
                height={30}
            />
            <p>&copy; 2023 Veterans. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;