import styles from './Home.module.css'
import home1 from '../../image/Home1.png'

import Gallery from '../layout/Gallery';

function Home() {
    return (
            <section className={styles.section}>
                
                <img className={styles.fotohome} src={home1} alt="home" />

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

export default Home;