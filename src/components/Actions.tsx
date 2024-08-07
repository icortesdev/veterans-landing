import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Actions = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.actions}>
            <button onClick={toggleMenu} className={styles.menuButton}>
                &#9776; 
            </button>
            <div className={`${styles.actionButtons} ${isMenuOpen ? styles.show : ''}`}>
                <ActionButton url="https://veterans-whitepaper.gitbook.io/veterans" label="WHITEPAPER" />
                <ActionButton url="" label="COMING SOON..." disabled={true} />
            </div>
        </div>
    );
};

interface ActionButtonProps {
    url: string;
    label: string;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ url, label, disabled }) => (
    <a href={url} className={`${styles.button} ${disabled ? styles.disabled : ''}`} aria-disabled={disabled}>
        <span className={styles.label}>{label}</span>
    </a>
);

export default Actions;
