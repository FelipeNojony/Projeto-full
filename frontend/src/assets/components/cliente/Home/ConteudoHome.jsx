
import Footer from '../Footer/Footer';

import Tintos from '../vinhos/Tintos/Tintos';
import Branco from '../vinhos/Branco/Branco';
import Espumante from '../vinhos/Espumante/Espumante';
import Sobremesa from '../vinhos/Sobremesa/Sobremesa';
import Fortificado from '../vinhos/Fortificado/Fortificado';

import { useState } from 'react';

import './index.css'
import Carrinho from '../Carrinho/Carrinho';
import Header from '../Header/Header';
import Pedidos from '../Pedidos/Pedidos';

export default function ConteudoHome() {
    const [vinhoAtual, setVinhoAtual] = useState('Tintos');

  return (
    <>
            
                    <Header />
                
            

            <main>



                <h1>Vinhos de Excelência</h1>

                <p className="primeiro-paragrafo">
                    Dos clássicos aos mais modernos, nossa coleção traz rótulos de renome mundial, selecionados por especialistas.
                </p>

                <div className='bc-imagem imagem-home'>

                    <div className='container mb'>

                        <div className="div-um-home">
                            <h2 className='slogan'>Descubra o prazer de degustar o vinho perfeito com a Wine Experience!</h2>
                        </div>

                        <div className="div-dois-home">
                            <img src="src/assets/img/mockup.png" alt="" />
                        </div>

                    </div>

                </div>

                <section className='container' id='section-home'>

                    <h3>Qual escolha mais atrai seu paladar?</h3>

                    <div className="btn-vinhos">

                        <button id={vinhoAtual === 'Tintos' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('Tintos')}>Tintos
                        </button>

                        <button id={vinhoAtual === 'Branco' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('Branco')}>Brancos
                        </button>

                        <button id={vinhoAtual === 'Espumante' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('Espumante')}>Espumantes
                        </button>

                        <button id={vinhoAtual === 'Sobremesa' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('Sobremesa')}>Sobremesa
                        </button>

                        <button id={vinhoAtual === 'Fortificado' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('Fortificado')}>Fortificado
                        </button>

                    </div>

                </section>
                
                    
                    {vinhoAtual === 'Tintos' && <Tintos />}
                    {vinhoAtual === 'Branco' && <Branco />}
                    {vinhoAtual === 'Espumante' && <Espumante />}
                    {vinhoAtual === 'Sobremesa' && <Sobremesa />}
                    {vinhoAtual === 'Fortificado' && <Fortificado />}
                    <Carrinho />
                    <Pedidos />
                


                <p className='segundo-paragrafo'>
                    Junte-se à Wine Experience e brinde os melhores momentos da vida com o vinho perfeito. <span>Explore, descubra e deguste!</span>
                </p>



            </main>

            <Footer />
    </>
  );
}

