import React from 'react';
import styles from './Footer.module.css'

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            Datas based on Api <a href="https://covid19.mathdro.id/api">https://covid19.mathdro.id/api</a>
        </footer>
    )
}

export default Footer;