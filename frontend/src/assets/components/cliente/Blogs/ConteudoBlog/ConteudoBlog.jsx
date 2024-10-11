import { useState } from 'react';
import Header from '../../Header/Header'
import Blogs from '../../Blogs/Blogs'
import Footer from '../../Footer/Footer'
import Carrinho from '../../Carrinho/Carrinho'

export default function ConteudoBlog() {
  // Estado para controlar qual modal está aberto e os dados dinâmicos do modal
  const [openModal, setOpenModal] = useState(false);
  const [currentData, setCurrentData] = useState({}); // Armazena o conteúdo atual do modal

  // Dados dinâmicos para cada seção do blog
  const blogData = {
    harmonizacao: {
      title: "A Arte da Harmonização:",
      titleDois: "Combine Vinhos e Pratos como um Especialista",
      content: "Harmonizar vinho e comida é uma arte que eleva a experiência gastronômica a outro nível. O objetivo é criar uma sinergia onde os sabores do vinho e da comida se complementem e realcem mutuamente. Algumas dicas importantes incluem...",
      subtitle: "Correspondência de Intensidade:",
      contentDois: "Pratos leves combinam melhor com vinhos leves, enquanto pratos mais robustos pedem vinhos mais encorpados.",
      subtitleDois: "Contraste e Complemento:",
      contentTres: "Contrastar sabores, como combinar um vinho doce com um prato salgado, pode ser surpreendente e delicioso. Já a complementação de sabores semelhantes, como um vinho frutado com um prato de frutas, também é uma técnica eficaz.",
      subtitleTres: "Considerar os Ingredientes Principais:",
      contentQuatro: "A carne, o peixe ou o vegetal principal do prato é crucial na escolha do vinho. Por exemplo, carnes vermelhas geralmente combinam bem com vinhos tintos encorpados, enquanto peixes e frutos do mar são melhor acompanhados por vinhos brancos leves.",
      subtitleQuatro: "Equilíbrio de Acidez:",
      contentCinco: "Vinhos com alta acidez combinam bem com pratos ácidos, ajudando a limpar o paladar e realçar os sabores.",
      subtitleCinco: "Doçura e Sobremesas:",
      contentSeis: "Ao harmonizar vinhos com sobremesas, escolha vinhos que sejam tão doces quanto ou mais doces que a sobremesa para evitar que o vinho pareça amargo.",
    },
    viagens: {
      title: "Descubra as Maravilhas das",
      titleDois: "Regiões Vinícolas do Mundo",
      content: "Explorar regiões vinícolas é uma jornada enogastronômica que oferece um mergulho profundo nas tradições e cultura locais. Algumas das regiões vinícolas mais renomadas incluem:",
      subtitle: "Bordeaux, França:",
      contentDois: "Conhecida por seus vinhos tintos clássicos, Bordeaux é uma região histórica com castelos pitorescos e vinhedos de prestígio.",
      subtitleDois: "Toscana, Itália:",
      contentTres: "Famosa por seus Chiantis e Brunellos, a Toscana oferece paisagens deslumbrantes e vinícolas que combinam produção de vinhos com hospitalidade de classe mundial.",
      subtitleTres: "Napa Valley, Califórnia:",
      contentQuatro: "Um dos principais destinos vinícolas dos Estados Unidos, Napa Valley é conhecida por seus Cabernet Sauvignons e experiências de degustação de alto nível.",
      subtitleQuatro: "Mendoza, Argentina:",
      contentCinco: "Com seus Malbecs icônicos, Mendoza é um paraíso para os amantes de vinho, oferecendo vinícolas situadas aos pés dos Andes.",
      subtitleCinco: "Douro, Portugal:",
      contentSeis:"Esta região é famosa pelo vinho do Porto e oferece vinhedos em terraços íngremes ao longo do rio Douro.",
    },
    historias: {
      title: "O Fascinante Mundo do Vinho:",
      titleDois: "Histórias e Curiosidades",
      content: "O universo do vinho é repleto de histórias fascinantes e curiosidades que enriquecem a experiência de degustação:",
      subtitle: "História Milenar:",
      contentDois: "A produção de vinho data de milhares de anos, com evidências arqueológicas de vinificação na Geórgia e no Irã desde cerca de 6000 a.C.",
      subtitleDois: "Terroir:",
      contentTres: "Este termo francês refere-se ao conjunto de condições geográficas, climáticas e culturais que influenciam o caráter do vinho. Cada terroir é único e contribui para a diversidade de sabores e estilos de vinho.",
      subtitleTres: "Métodos de Produção:",
      contentQuatro: "Existem diferentes métodos de produção, como a vinificação em ânforas de barro na Geórgia, a utilização de barris de carvalho em Bordeaux, ou a fermentação em cubas de aço inoxidável em vinícolas modernas.",
      subtitleQuatro: "Curiosidades:",
      contentCinco: "Por exemplo, o vinho mais caro do mundo vendido em leilão foi um Romanée-Conti 1945, arrematado por mais de meio milhão de dólares. Outra curiosidade é que a cor do vinho pode mudar com a idade, com vinhos tintos tendendo a clarear e vinhos brancos a escurecer.",
      subtitleCinco: "",
      contentSeis:"",
    },
    guia: {
      title: "Seu Guia Completo para",
      titleDois: "Escolher, Armazenar e Servir Vinhos",
      content: "Para aproveitar ao máximo a experiência com o vinho, é importante conhecer algumas práticas essenciais:",
      subtitle: "Escolha do Vinho:",
      contentDois: "Considere o tipo de ocasião, o gosto pessoal e a harmonização com a comida. Vinhos brancos, rosés e espumantes são ideais para climas quentes e refeições leves, enquanto vinhos tintos são mais adequados para climas frios e pratos mais robustos.",
      subtitleDois: "Armazenamento:",
      contentTres: "Vinhos devem ser armazenados em locais escuros, com temperatura constante (idealmente entre 12-15°C) e com umidade controlada para preservar a rolha. Garrafas devem ser mantidas na posição horizontal para manter a rolha úmida.",
      subtitleTres: "Serviço:",
      contentQuatro: "Vinhos brancos e espumantes devem ser servidos frios (8-12°C), enquanto tintos devem ser ligeiramente resfriados (15-18°C). Decantar vinhos tintos mais velhos pode ajudar a liberar seus aromas e sabores.",
      subtitleQuatro: "Degustação:",
      contentCinco: "Avalie a aparência, aroma, sabor e finalização do vinho. Use um copo adequado e segure-o pela haste para evitar alterar a temperatura do vinho.",
      subtitleCinco: "",
      contentSeis:"",
    },
    eventos: {
      title: "Participe de Eventos Exclusivos e",
      titleDois: "Degustações Inesquecíveis",
      content: "Eventos de vinho e degustações são oportunidades fantásticas para explorar novos rótulos, aprender com especialistas e compartilhar a paixão pelo vinho com outros entusiastas. Em eventos como esses, você pode esperar:",
      subtitle: "Degustações Guiadas:",
      contentDois: "Conduzidas por sommeliers ou enólogos, que explicam as características dos vinhos e suas histórias.",
      subtitleDois: "Festivais de Vinho:",
      contentTres: "Reuniões maiores que celebram a cultura do vinho, muitas vezes com produtores, música ao vivo e culinária local.",
      subtitleTres: "Workshops e Masterclasses:",
      contentQuatro: "Sessões educativas focadas em temas específicos, como técnicas de degustação, harmonização e história do vinho.",
      subtitleQuatro: "Lançamentos de Vinhos:",
      contentCinco: "Oportunidade para ser um dos primeiros a provar novos rótulos e edições limitadas diretamente dos produtores.",
      subtitleCinco: "Participar desses eventos não só enriquece seu conhecimento sobre vinhos, mas também proporciona experiências memoráveis e a chance de construir uma rede de contatos no mundo do vinho.",
      contentSeis:"",
    }
  };

  // Função para abrir o modal com os dados corretos
  const openModalWithData = (sectionKey) => {
    setCurrentData(blogData[sectionKey]);
    setOpenModal(true);
  };

  return (
    <>
      <Header />

      <main>

        <h1>Bem Vindo ao Blog Wine Experience!</h1>

        <p className="primeiro-paragrafo">
          Descubra o fascinante universo dos vinhos em nosso blog. Aqui, apaixonados por vinho encontram um espaço repleto de informações, dicas e curiosidades para aprimorar cada gole.
        </p>

        <div className="bc-imagem imagem-blog"></div>

        <section className="container pages" id='sep'>
          
          {/* Dicas de Harmonização */}
          <h4 className="text-blog">Dicas de Harmonização</h4>
          <p className="text">
            Aprenda como combinar vinhos com pratos diversos e torne suas refeições ainda mais especiais.
          </p>
          <p className="sub-text">
            Aprenda a elevar suas refeições a um novo patamar com nossas dicas de harmonização. Descubra como escolher o vinho perfeito para complementar desde pratos sofisticados até jantares casuais. Com as orientações dos nossos especialistas, você nunca mais terá dúvidas sobre qual vinho servir em cada ocasião.
          </p>
          <button onClick={() => openModalWithData('harmonizacao')}>Especialistas</button>

          {/* Viagens e Vinícolas */}
          <h4 className="text-blog">Viagens e Vinícolas</h4>
          <p className="text">
            Conheça as melhores regiões vinícolas do mundo e planeje sua próxima viagem enogastronômica.
          </p>
          <p className="sub-text">
            Viaje conosco pelas mais famosas regiões vinícolas e conheça as histórias e tradições que tornam cada vinho único. Explore vinícolas renomadas, descubra destinos emergentes e planeje sua próxima aventura enogastronômica com nossas dicas de viagem.
          </p>
          <button onClick={() => openModalWithData('viagens')}>Especialistas</button>

          {/* Histórias e Curiosidades */}
          <h4 className="text-blog">Histórias e Curiosidades</h4>
          <p className="text">
            Mergulhe nas histórias por trás dos rótulos e explore as curiosidades do universo do vinho.
          </p>
          <p className="sub-text">
            Mergulhe nas fascinantes histórias por trás dos rótulos e explore curiosidades que só o universo do vinho pode oferecer. Desde a origem das uvas até os métodos de produção, nosso blog revela segredos e fatos intrigantes.
          </p>
          <button onClick={() => openModalWithData('historias')}>Especialistas</button>

          {/* Guia do Vinho */}
          <h4 className="text-blog">Guia do Vinho</h4>
          <p className="text">
            Receba orientações dos nossos especialistas sobre como escolher, armazenar e servir vinhos da melhor maneira.
          </p>
          <p className="sub-text">
            Transforme-se em um verdadeiro conhecedor de vinhos com nosso guia completo. Receba orientações detalhadas sobre como escolher vinhos de qualidade, armazená-los corretamente e servir como um sommelier.
          </p>
          <button onClick={() => openModalWithData('guia')}>Especialistas</button>

          {/* Eventos e Degustações */}
          <h4 className="text-blog">Eventos e Degustações</h4>
          <p className="text">
            Fique por dentro dos eventos exclusivos e das degustações promovidas pela Wine Experience.
          </p>
          <p className="sub-text">
            Fique por dentro dos eventos exclusivos e das degustações promovidas pela Wine Experience. Conheça novas tendências, experimente rótulos excepcionais e compartilhe momentos únicos com outros entusiastas do vinho.
          </p>
          <button onClick={() => openModalWithData('eventos')}>Especialistas</button>

        </section>

        {/* Componente Blogs com conteúdo dinâmico */}
        <Blogs
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={currentData.title}
          titleDois={currentData.titleDois}
          content={currentData.content}
          subtitle={currentData.subtitle}
          contentDois={currentData.contentDois}
          subtitleDois={currentData.subtitleDois}
          contentTres={currentData.contentTres}
          subtitleTres={currentData.subtitleTres}
          contentQuatro={currentData.contentQuatro}
          subtitleQuatro={currentData.subtitleQuatro}
          contentCinco={currentData.contentCinco}
          subtitleCinco={currentData.subtitleCinco}
          contentSeis={currentData.contentSeis}
        />

        <Carrinho />

      </main>

      <Footer />
    </>
  );
}
