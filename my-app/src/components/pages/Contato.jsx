import styles from './Contato.module.css';
import imgContato from '../../image/Contato.png'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contato() {
    return (
        <section className={styles.section}>

            <img className={styles.imgContato} src={imgContato} alt="" />

            <h1>Entre em contato através de nosso whatsapp</h1>
            
            <a className={styles.wpp} href="https://api.whatsapp.com/send/?phone=5581981952775&text&app_absent=0" target="_blank" rel="noreferrer">
                    <FaWhatsapp className={styles.icon} /> (81)981952775
            </a>
            <a className={styles.wpp} href="https://api.whatsapp.com/send/?phone=5581981593273&text&app_absent=0" target="_blank" rel="noreferrer">
                    <FaWhatsapp className={styles.icon} /> (81)981593273
            </a>

            <ul className={styles.balao}>

                <li className={styles.telefone}>

                    <p><FaPhone /> Telefones para contato:</p>

                        <a className={styles.link} href="https://api.whatsapp.com/send/?phone=5581981952775&text&app_absent=0" target="_blank" rel="noreferrer">
                            <p className={styles.azul}>(81)981952775</p>
                        </a>
                        <a className={styles.link} href="https://api.whatsapp.com/send/?phone=5581981593273&text&app_absent=0" target="_blank" rel="noreferrer">
                            <p className={styles.azul}>(81)981593273</p>
                        </a>
                </li>
                
                <li className={styles.email}>
                    <p><MdEmail /> E-mail para contato:</p>

                        <p className={styles.azul}>recantodosol@gmail.com.br</p>
                </li>

            </ul>
        </section>
    );
}

export default Contato;