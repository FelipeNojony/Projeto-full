import { Link } from 'react-router-dom';
import CardAdm from "../../CardAdm/CardAdm"

export default function FortificadoAdm() {
    return (
        <>
            <section className="container fortificado">

                <div className="cards-section">

                    <p className=".regiao">Portugal</p>

                    <div className="cards">

                    <div className="card-adm">
                            <div>
                                <Link to={"/adicionarItem"} ><img src="src/assets/img/Frame 61.png" alt="frame de adicionar item" /></Link>
                            </div>
                            <p className='nameAdm'>Adicionar Item</p>
                        </div>

                        <CardAdm
                            image="https://cdn.mistral.com.br/products/1394/img_m_1394.png"
                            alternative="Vinho Graham's 20 Years Old Tawny"
                            name="Graham's 20 Years Old Tawny"
                            value="R$ 827,73"
                        />

                        <CardAdm
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/p/o/porto_taylo_s_tawny_10_anos.png"
                            alternative="Vinho do Porto Taylor’s Tawny 10 Anos"
                            name="Taylor’s Tawny 10 Anos"
                            value="R$ 498,00"
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
                            image="https://images.vivino.com/thumbs/ZgaHRIsZRG6HB0t_Da8DHA_pb_x600.png"
                            alternative="Vinho González Byass"
                            name="González Byass"
                            value="R$ 326,66"
                        />

                    </div>

                </div>

            </section>
        </>
    )
}