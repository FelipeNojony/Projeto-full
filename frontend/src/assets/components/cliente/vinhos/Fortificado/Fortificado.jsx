import './index.css';
import Espanha from './Paises/Espanha';
import Portugal from './Paises/Portugal';

export default function Fortificado() {
    return (
        <>
            <section className="container fortificado">

                <div className="cards-section">

                    <Portugal />

                    <Espanha />

                </div>

            </section>
        </>
    )
}