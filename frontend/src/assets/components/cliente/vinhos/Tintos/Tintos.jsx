import './index.css';
import Espanha from './Paises/Espanha';
import Franca from './Paises/Franca';
import Italia from './Paises/Italia';
import Portugal from './Paises/Portugal';

export default function Tintos() {

    
    return (
        <>
            <section className="container tintos">

                <div className="cards-section">

                    <Franca />

                    <Italia />    

                    <Espanha />

                    <Portugal />

                    
                </div>

            </section>
        </>
    )
}

