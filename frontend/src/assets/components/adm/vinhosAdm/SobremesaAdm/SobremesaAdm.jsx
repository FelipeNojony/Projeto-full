import { Link } from 'react-router-dom';
import CardAdm from '../../CardAdm/CardAdm';

export default function SobremesaAdm() {
    return (
        <>
            <section className="container sobremesa">

                <div className="cards-section">

                    <p className=".regiao">França</p>

                    <div className="cards">

                    <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://cdn.mistral.com.br/products/36732/img_m_36732.png"
                            alternative="Vinho Château d'Yquem 2018"
                            name="Château d'Yquem 2018"
                            value="R$ 11.423,30"
                        />

                    </div>

                    <p className=".regiao">Hungria</p>

                    <div className="cards">

                    <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://cdn.mistral.com.br/products/37449/img_m_37449.png"
                            alternative="Vinho Tokaji Aszú 5 Puttonyos 1993"
                            name="Tokaji Aszú 5 Puttonyos 1993"
                            value="R$ 2.467,78"
                        />

                    </div>

                </div>

            </section>
        </>
    )
}