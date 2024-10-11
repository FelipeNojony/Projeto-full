


import './index.css';
import Franca from './Paises/Franca';
import Hungria from './Paises/Hungria';

export default function Sobremesa() {

    
    return (
        <>
            <section className="container sobremesa">

                <div className="cards-section">

                    <Franca />
                    
                    <Hungria />

                </div>

            </section>
        </>
    )
}