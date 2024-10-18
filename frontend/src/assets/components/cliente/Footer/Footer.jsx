import { Link } from 'react-router-dom';

import './index.css';

export default function Footer() {
    return (
        <>
            <footer>

                <div className="container separacao">
                    <div id="sobre">
                        <h4>Sobre a Wine</h4>
                        <div>
                            <Link href="#" className="sobre">Sobre a Wine Experience</Link>
                            <Link href="#" className="sobre">Nossa missão</Link>
                            <Link href="#" className="sobre">Nossa visão</Link>
                            <Link href="#" className="sobre">Nosso time</Link>
                            <Link href="#" className="sobre">Nossos valores</Link>
                        </div>
                    </div>

                    <div id="apps">
                        <h4>Redes sociais</h4>
                        <div className="rede">
                            <Link href="#"><img src="src/assets/img/insta.png" alt="" className="redes" /></Link>
                            <Link href="#"><img src="src/assets/img/facebook.png" alt="" className="redes" /></Link>
                            <Link href="#"><img src="src/assets/img/youtube.png" alt="" className="redes" /></Link>
                        </div>
                    </div>
                </div>

                <div className="container line"></div>

                <p>2024 Wine Experience. Todos os direitos reservados.</p>


            </footer>
        </>
    );
}