import { Link } from 'react-router-dom'

import Container from './Container';

import styles from './Navbar.module.css'
import logo from '../../image/Logo.png'

function Navbar() {
    return (
        <nav className= {styles.navbar}>
            <Container>

                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/localizacao">Localização</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;