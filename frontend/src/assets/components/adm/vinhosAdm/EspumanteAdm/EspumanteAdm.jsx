import { Link } from 'react-router-dom';
import CardAdm from "../../CardAdm/CardAdm"

export default function EspumanteAdm() {
    return (
        <>
            <section className="container espumante">

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
                            image="https://images.vivino.com/thumbs/s5aXYaQiTu-V_xEYI3KXRg_pb_x600.png"
                            alternative="Espumante Dom Pérignon"
                            name="Dom Pérignon"
                            value="R$ 3.988,00"
                        />

                        <CardAdm
                            image="https://cdn.mistral.com.br/products/35663/img_m_35663.png"
                            alternative="Espumante Champagne Bollinger La Grande Année 2014"
                            name="Champagne Bollinger La Grande Année 2014"
                            value="R$ 2.003,38"
                        />

                    </div>

                    <p className=".regiao">Itália</p>

                    <div className="cards">

                    <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                    <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/f/e/ferrari_trento_maximum_brut.png"
                            alternative="Espumante Ferrari Trento Maximum Brut"
                            name="Ferrari Trento Maximum Brut"
                            value="R$ 466,00"
                        />

                    </div>

                </div>

            </section>
        </>
    )
}