import { FaWhatsapp, FaInstagram, FaFacebook, FaCopyright } from 'react-icons/fa'

import { Link  } from 'react-router-dom'

import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>

            <ul className={styles.social_list}>
                <li>
                <a href="https://api.whatsapp.com/send/?phone=5581981952775&text&app_absent=0" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a>
                </li>
                <li>
                <a href="https://instagram.com/recantodosol01?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a> 
                </li>
                <li>
                <a href="https://www.facebook.com/andsonbarbosadasilva.silva" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a> 
                </li>
                
            </ul>

            <p ><Link className={styles.link} to="/">Recanto do Sol</Link> <FaCopyright/> 2021</p>
        </footer>
    );
}

export default Footer;