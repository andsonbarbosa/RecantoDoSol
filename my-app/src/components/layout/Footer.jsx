import { FaWhatsapp, FaInstagram, FaFacebook, FaCopyright } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>

            <ul className={styles.social_list}>
                <li>
                <a href="https://api.whatsapp.com/send/?phone=5581981952775&text&app_absent=0">
                    <FaWhatsapp />
                </a>
                </li>
                <li>
                <a href="https://instagram.com/recantodosol01?igshid=YmMyMTA2M2Y=">
                    <FaInstagram />
                </a> 
                </li>
                <li>
                <a href="https://www.facebook.com/andsonbarbosadasilva.silva">
                    <FaFacebook />
                </a> 
                </li>
                
            </ul>

            <p><span>Recanto do Sol</span> <FaCopyright/> 2021</p>
        </footer>
    );
}

export default Footer;