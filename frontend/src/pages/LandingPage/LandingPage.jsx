import propTypes from 'prop-types'
import './index.css';
import { useContext } from 'react';
import AppContext from '../../context/Appcontext';







export default function LandingPage({ data, isOpen }) {

    const {setOpenLanding } = useContext(AppContext)

    const fecharLanding = () => {
        setOpenLanding(false)
    }
 
    const { image, name, description, winemaking, aboutproducer, critics, bottlesize, region, producer, alcoholcontent, country, harmonization, type, grape, servingtemperature } = data;

    if (!isOpen) return null;

        return (
            <>

                

                <div className='fundo-landing'>
                    <main className="container-landing">

                        <div className="content-about">
                            <div id='btn-voltar'>
                                <button onClick={fecharLanding}>Voltar</button>
                            </div>


                            <div className="imagem">
                                <img src={image} alt="imagem do vinho"></img>
                            </div>

                            <div className="about-vinho">
                                <div className="history">
                                    <div className="titulo">
                                        <span>{name}</span>

                                    </div>

                                    <div className='descricao'>
                                        <h2 className='titulo'>Descrição</h2>
                                        <p className="texto">
                                            {description}
                                        </p>
                                    </div>

                                </div>


                                <div className="vinificacao">
                                    <h2 className="titulo">Vinificação</h2>
                                    <p className="texto">
                                        {winemaking}
                                    </p>

                                </div>


                                <div className="about">
                                    <h2 className="titulo">Sobre o produto</h2>

                                    <p className="texto">
                                        {aboutproducer}
                                    </p>

                                </div>

                            </div>


                        </div>

                        <div className="content-caracteristicas">
                            <div className="linha1">
                                <div className="criticos">
                                    <h3 className="titulo">Criticos</h3>
                                    <p className="texto">{critics}</p>
                                </div>

                                <div className="tamanho-garrafa">
                                    <h3 className="titulo">Tamanho da garrafa</h3>
                                    <p className="texto">{bottlesize}</p>
                                </div>

                                <div className="regiao">
                                    <h3 className="titulo">Região</h3>
                                    <p className="texto">{region}</p>
                                </div>

                                <div className="produtor">
                                    <h3 className="titulo">Produtor</h3>
                                    <p className="texto">{producer}</p>
                                </div>

                                <div className="teor-alcoolico">
                                    <h3 className="titulo">Teor Alcoólico</h3>
                                    <p className="texto">{alcoholcontent}</p>
                                </div>

                            </div>
                        </div>

                        <div className="content-caracteristicas2">
                            <div className="linha2">
                                <div className="pais">
                                    <h3 className="titulo">Pais</h3>
                                    <p className="texto">{country}</p>
                                </div>

                                <div className="harmonizacao">
                                    <h3 className="titulo">Harmonização</h3>
                                    <p className="texto">
                                        {harmonization}
                                    </p>
                                </div>

                                <div className="tipo">
                                    <h3 className="titulo">Tipo</h3>
                                    <p className="texto">{type}</p>
                                </div>

                                <div className="uvas">
                                    <h3 className="titulo">Uvas</h3>
                                    <p className="texto">
                                        {grape}

                                    </p>
                                </div>

                                <div className="temperatura-servico">
                                    <h3 className="titulo">Temperatura de Serviço</h3>
                                    <p className="texto">{servingtemperature}</p>
                                </div>

                            </div>

                        </div>

                        <button className="comprar" onClick="Comprar()">Comprar</button>


                    </main>
                </div>






            </>
        );
}

LandingPage.propTypes = {
    data: propTypes.shape({}),
    isOpen: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
}.isRequired;

