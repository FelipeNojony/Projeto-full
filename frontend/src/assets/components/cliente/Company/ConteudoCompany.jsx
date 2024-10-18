import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Carrinho from '../Carrinho/Carrinho';


export default function ConteudoCompany() {
    return (
        <>
            <Header />

            <main>

                <h1><span className="spn-company">Viva a expêriencia do vinho conosco. Brinde a cada momento com a </span> Wine Experience!</h1>

                <p className="primeiro-paragrafo">
                    Descubra o fascinante universo dos vinhos em nosso blog. Aqui, apaixonados por vinho encontram um espaço repleto de informações, dicas e curiosidades para aprimorar cada gole.
                </p>

                <div className="container imagem-company">
                    <img src="src/assets/img/logo-full.jpg" alt="" />
                </div>

                <section className="cpn container">

                    <div className="mg-cpn">

                        <div className="cpn-att">

                            <h3>Sobre a Wine Experience</h3>

                            <p>
                                Na Wine Experience, acreditamos que cada garrafa de vinho é uma viagem pelo mundo, uma celebração de culturas e uma experiência sensorial única. Fundada com paixão e expertise, nossa missão é trazer o melhor do universo dos vinhos para sua mesa.
                            </p>

                        </div>

                        <div className="cpn-att">

                            <h3>Nossa Missão</h3>

                            <p>
                                Oferecer vinhos de alta qualidade, selecionados por especialistas, e proporcionar uma experiência de compra memorável, com serviço excepcional e entrega eficiente.
                            </p>

                        </div>

                        <div className="cpn-att">

                            <h3>Nossa Visão</h3>

                            <p>
                                Ser a referência em e-commerce de vinhos, promovendo a cultura do vinho e proporcionando experiências inesquecíveis a nossos clientes.
                            </p>

                        </div>

                        <div className="cpn-att">

                            <h3>Nosso Time</h3>

                            <p>
                                A Wine Experience é composta por um time de especialistas e apaixonados por vinhos, dedicados a selecionar os melhores rótulos e a oferecer um atendimento personalizado. Nossa equipe está sempre pronta para ajudar você a encontrar o vinho perfeito para cada ocasião.
                            </p>

                        </div>

                        <div className="cpn-att">

                            <h3>Nossos Valores</h3>

                            <span>Excelência</span>

                            <p>
                                Compromisso com a qualidade em cada rótulo, serviço e atendimento.
                            </p>

                            <br />

                            <span>Paixão pelo Vinho</span>

                            <p>
                                Celebramos a riqueza e a diversidade do universo dos vinhos.
                            </p>

                            <br />

                            <span>Inovação</span>

                            <p>
                                Estamos sempre buscando novas maneiras de surpreender e encantar nossos clientes.
                            </p>

                            <br />

                            <span>Sustentabilidade</span>

                            <p>
                                Valorizamos práticas sustentáveis que respeitam o meio ambiente e promovem a responsabilidade social.
                            </p>

                        </div>

                    </div>



                </section>

                <Carrinho/>

            </main>

            <Footer />
        </>
    );
}

