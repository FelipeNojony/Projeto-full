import './index.css';
import Franca from './Paises/Franca';
import Italia from './Paises/Italia';

export default function Espumante() {
    return (
        <>
            <section className="container espumante">

                <div className="cards-section">

                    <Franca />

                    <Italia />
                </div>

            </section>
        </>
    )
}