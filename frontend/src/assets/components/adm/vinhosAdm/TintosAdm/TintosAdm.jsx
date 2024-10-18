import { Link } from 'react-router-dom';
import CardAdm from '../../CardAdm/CardAdm';

import './index.css'

export default function TintosAdm() {

    return (
        <>
            <section className="container tintos">

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
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png"
                            alternative="Vinho Château Margaux Grand Cru Classé 2017"
                            name="Château Margaux Grand Cru Classé 2017"
                            value="R$ 10.990,00"
                        />

                        <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho-chateau-lafite-rothschild-1999_3.png"
                            alternative="Vinho Château Lafite Rothschild Grand Cru Classé 2006"
                            name="Château Lafite Rothschild Grand Cru Classé 2006"
                            value="R$ 17.760,00"
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
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/g/a/gaja_barolo_dagromis.png"
                            alternative="Vinho Gaja Barolo Dagromis 2018"
                            name="Gaja Barolo Dagromis 2018"
                            value="R$ 1.692,83"
                        />

                    </div>

                    <p className=".regiao">Espanha</p>

                    <div className="cards">

                        <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_vega_sicilia_unico_2009.png"
                            alternative="Vinho Vega Sicilia Unico 2006"
                            name="Vega Sicilia Unico 2006"
                            value="R$ 7.732,76"
                        />

                        <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_pingus.png"
                            alternative="Vinho Pingus 2015"
                            name="Pingus 2015"
                            value="R$ 14.000,00"
                        />

                    </div>

                    <p className=".regiao">Portugal</p>

                    <div className="cards">

                        <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/q/u/quinta_do_vale_me_o.png"
                            alternative="Vinho Quinta do Vale Meão 2020"
                            name="Quinta do Vale Meão 2020"
                            value="R$ 1.939,36"
                        />

                    </div>

                </div>

            </section>
        </>
    )
}