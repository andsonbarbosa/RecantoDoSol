import styles from './Sobre.module.css';

import Gallery from '../layout/Gallery';
import imgSobre from '../../image/Sobre.png';

const Sobre = () => {
    return (
        <section className={styles.section}>

            <img className={styles.imgSobre} src={imgSobre} alt="" />

            <h1>O melhor espaço para a sua família!</h1>

                <p>São uma piscina para adultos e crianças,
                além de espaço coberto onde se encontra churrasqueira, freezer, fogão e entre outras coisas. Confira:</p>
                
                <ul>
                    <li>
                        Uma piscinas para adultos e crianças;
                    </li>
                    <li>
                        Área verde ao lado da piscina;
                    </li>
                    <li>
                        Área coberta para lazer;
                    </li>
                    <li>
                        Chuveirão;
                    </li>
                    <li>
                        Salão de jogos (Sinucas, Totó);
                    </li>
                </ul>

            <h1>Galeria de fotos</h1>
            <h2>@recantodosol01</h2>

            <Gallery /> 
        </section>
    );
}

export default Sobre;