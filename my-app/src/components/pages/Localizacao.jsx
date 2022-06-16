import styles from './Localizacao.module.css';

import imgLoca from '../../image/Localização.png'

function Localizacao() {
    return (
        <section className={styles.section}>

            <img className={styles.imgLoca} src={imgLoca} alt="" />

            <h1>Localização</h1>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6763.589060868303!2d-35.847669790323316!3d-7.7741326567700035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f1be98389279dff!2sRecanto%20do%20Sol!5e1!3m2!1spt-BR!2sbr!4v1655405818617!5m2!1spt-BR!2sbr"
             style={{ width: '800px', height:'500px', border:'0', padding: '50px'}} title='Mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
}

export default Localizacao;