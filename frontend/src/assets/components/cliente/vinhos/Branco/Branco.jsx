import './index.css';
import Alemanha from './Paises/Alemanha';
import Franca from './Paises/Franca';
import Italia from './Paises/Italia';

export default function Branco() {
    return (
        <>
            <section className="container branco">

                <div className="cards-section">

                    <Franca />

                    <Alemanha />
                    
                    <Italia />
                </div>

            </section>
        </>
    )
}