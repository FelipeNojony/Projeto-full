import { Link } from 'react-router-dom';
import CardAdm from '../../CardAdm/CardAdm';

export default function BrancosAdm() {
    return (
        <>
            <section className="container branco">

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

                    <p className=".regiao">Alemanha</p>

                    <div className="cards">

                    <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://cdn.mistral.com.br/products/37263/img_m_37263.png"
                            alternative="Vinho Joh. Jos. Prüm Wehlener Sonnenuhr Spätlese 2021"
                            name="Joh. Jos. Prüm Wehlener Sonnenuhr Spätlese 2021"
                            value="R$ 803,07"
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
                            image="https://cdn.mistral.com.br/products/36662/img_m_36662.png"
                            alternative="Vinho Gaja Gaia & Rey Chardonnay 2020"
                            name="Gaja Gaia & Rey Chardonnay 2020"
                            value="R$ 3.443,63"
                        />

                    </div>

                </div>

            </section>
        </>
    )
}