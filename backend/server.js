import Fastify from "fastify"
import fastifyCors from "@fastify/cors"


const fastify = Fastify({ logger: true });
const PORT = 3333

fastify.register(fastifyCors, {
    origin: "*",
})


const produtos = {
    "produtos": [
        {
            "categoria": "tinto-frança",
            "produtos": [
                {
                    "id": "001",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png",
                    "name": "Château Margaux Grand Cru Classé 2017",
                    "price": 10990.00,
                    "description": "O Vinho Château Margaux Grand Cru Classé é um dos mais renomeados e conhecidos Grand Vin de Bordeuax, reconhecido como um Premier Grand Cru Classé na histórica classificação 1855. Produzido com um assemblage das uvas Cabernet, Sauvignon, Merlot, Petit Verdot e Cabernet Franc, oriundas de vinhedos em Margaux, na França. De coloração rubi intensa, revela, no nariz,aromas de frutas negras maduras, como ameixa e figo, notas florais, como de rosas, nuances herbáceas e de especiarias, além de toques de tabaco. Um Vinho Tinto de grande concentração e intensidade. Em boca, conta taninos ricos e aveludados, ótimo frescor e um final longo e persistente. Esse é um vinho de guardar por exelência, podendo amadurecer na garrafa por décadas!",
                    "winemaking": "O Château Margaux Grand Cru Classé 2017 é produzido com um assemblage das uvas Cabernet Sauvignon (90%), Merlot (4%), Petit Verdot (4%) e Cabernet Franc (2%), oriundas de vinhedos localizados em Margaux, dentro da região vitivinícola de Bordeaux, na França. As uvas são colhidas e selecionadas manualmente. A fermentação é realizada em grandes tonéis de carvalho e em cubas de aço inox, sob temperatura controlada. O vinho matura em barricas novas de carvalho francês durante um período de dezoito a vinte e seis meses.",
                    "aboutproducer": "Château Margaux é um dos mais importantes nomes de Bordeaux, sendo um de quatro Chateaux a ser reconhecido como um Premier Grand Cru Classé na classificação de 1855. A história da propriedade remonta ao século XVI, quando era conhecida como La Mothe de Margaux. Pierre de Lestonnac adquiriu o Château em 1572, expandindo a área para 265 hectares, sendo um terço dedicado aos vinhedos, configuração que perdura até hoje. Durante os últimos séculos, Château Margaux pertenceu a vários donos, sendo adquirido por André Mentzelopoulos em 1977. Após a morte de André, em 1980, sua filha, Corinne Mentzelopoulo assumiu o controle da propriedade. Hoje, Château Margaux continua sendo reconhecido como um dos melhores vinhos, não só de Bordeaux, mas de todo o mundo.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Bordeaux",
                    "producer": "Château Margaux",
                    "alcoholcontent": "13%",
                    "country": "França",
                    "harmonization": "Carnes de caça, Queijos",
                    "type": "tinto",
                    "grape": "Cabernet Franc, Cabernet Souvignon, Merlot, Petit, Verdot",
                    "servingtemperature": "16 a 18°C",
                    "quantity": 1
                },
                {
                    "id": "002",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho-chateau-lafite-rothschild-1999_3.png",
                    "name": "Château Lafite Rothschild Grand Cru Classé 2006",
                    "price": 17600.00,
                    "descripition": "O Vinho Château Lafite Rothschild Grand Cru Classé 2006 é, simplesmente, um dos melhores e mais caros vinhos do mundo! Produzido pelos Domaines Barons de Rothschild (Lafite), com um corte das uvas Cabernet Sauvignon, Merlot, Cabernet Franc e Petit Verdot, oriundas de vinhedos localizados na região vitivinícola de Bordeaux, na França. De coloração rubi intensa com reflexos violáceos, revela, no nariz, aromas de frutas vermelhas e negras maduras, notas de especiarias, além de toques de cedro. Em boca, é um Vinho Tinto elegante e estruturado, contando com taninos maduros e um final longo e persistente. O Vinho Château Lafite Rothschild Grand Cru Classé 2006 é um rótulo que fica ainda melhor com o passar do tempo, apresentando um excepcional potencial de guarda, podendo envelhecer por mais de meio século na garrafa!",
                    "winemaking": "O Château Lafite Rothschild Grand Cru Classé 2006 é produzido com um corte das uvas Cabernet Sauvignon (74%), Merlot (18.5%), Cabernet Franc (6%) e Petit Verdot (1.5%), oriundas de vinhedos localizados na região vitivinícola de Bordeaux, na França. O vinho envelhece por um período de dezoito a vinte meses em barris de carvalho francês.",
                    "aboutproducer": "Domaines Barons de Rothschild (Lafite) apresenta uma rica história no mundo dos vinhos. A primeira menção ao nome Lafite remonta ao ano de 1234, por Gombaud de Lafite, abade do Monastério de Vertheuil, a norte de Pauillac. No século XVII a família Ségur organiza os vinhedos e a vinícola começa a cultivar sua grande reputação. A partir do século XVIII os vinhos encontram seu mercado em Londres. Em 1761 o marquês Nicolas Alexandre de Ségur melhora as técnicas de produção e ganha o aval de Luís XV e da corte de Versalhes. Baron James de Rothschild adquire o Château Lafite em oito de agosto 1868, mas falece apenas três meses depois da compra, deixando a propriedade para seus filhos Alphonse, Gustave e Edmond. A vinícola não passou imune pela grande praga de filoxera, sendo também afeta por focos de míldio. Durante a Segunda Guerra Mundial e a ocupação alemã de Médoc, a família Rothschild tem suas propriedades confiscadas, recuperando controle apenas em 1945. Segue-se então um período de reconstrução nas mãos do Baron Elie de Rothschild, produzindo um série de vintages excepcionais em 1945, 1947 e 1949. Hoje, Domaines Barons de Rothschild (Lafite) continua sua longa história de produção de rótulos extraordinários, com muitos vintages conquistando preços impressionantes em leilões ao redor do mundo.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Bordeaux",
                    "producer": "Domaines Barons de Rothschild (Lafite)",
                    "alcoholcontent": "13%",
                    "country": "França",
                    "harmonization": "Carnes vermelhas, Carnes de caça, Cordeiros",
                    "type": "tinto",
                    "grape": "Cabernet Franc, Cabernet Souvignon, Merlot, Petit Verdot",
                    "servingtemperature": "16 a 18°C",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "tinto-italia",
            "produtos": [
                {
                    "id": "003",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/g/a/gaja_barolo_dagromis.png",
                    "name": "Gaja Barolo Dagromis 2018",
                    "price": 1692.83,
                    "descripition": "O Vinho Gaja Barolo Dagromis é uma obra-prima de Angelo Gaja. Uma homenagem à família Gromis, de quem Gaja adquiriu a propriedade em 1995. Concentrado e, ao mesmo tempo, muito elegante, apresenta camadas de aromas, intercalando frutas vermelhas, especiarias, alcaçuz, ervas, flores e toques balsâmicos. Com taninos sedosos e um longo final, é um Vinho Tinto de altíssimo nível.",
                    "winemaking": "O Gaja Barolo Dagromis 2018 é produzido com a uva Nebbiolo, oriunda de vinhedos no Piemonte, na Itália. O vinho matura durante doze meses em barricas de carvalho e por mais doze meses em grandes cascos de carvalho.",
                    "aboutproducer": "Angelo Gaja é, sem dúvida, um dos maiores embaixadores do vinho italiano, reconhecido por ter revolucionado o panorama vitivinícola nacional nos últimos 30 anos. Não é à toa que acumula o título “Homem do Ano”, concedido por publicações reputadas, como a Decanter e a Wine Spectator. Descendente de uma tradicional família de produtores de vinho do Piemonte, ele assumiu o negócio familiar na década de 1960, mas em vez de se contentar em manter o “status quo” – que já era bem-sucedido -, decidiu inovar, produzindo vinhos mais sofisticados e equilibrados, de apelo internacional. Para isso, replantou muitos vinhedos, introduziu tecnologia na vinificação com a adoção de tanques de aço inoxidável com controle de temperatura, além de passar a envelhecer os vinhos em barricas de carvalho. Angelo Gaja também é conhecido por elaborar vinhos Barbaresco de vinhedo único, apresentando um nível de qualidade superior para a categoria, além de plantar uvas francesas Cabernet Sauvignon e Chardonnay no Pimente. A vinícola localizada em Barbaresco, no coração da zona de Langhe, possui vinhedos em diferentes denominações do Piemonte – Barbaresco e Barolo –, totalizando atualmente mais de 100 hectares divididos em 32 parcelas. Outro “atrevimento” de Gaja foi “invadir” a Toscana na década de 1990, adquirindo uma propriedade histórica, Pieve Santa Restituta, em Montalcino, e, logo em seguida, a Ca’Marcanda, em Bolgheri. Atualmente, ele é apoiado pelas filhas Gaia e Rossana na elaboração dos vinhos que compõem seu elogiado portfólio e também na gestão dos negócios.",
                    "critics": "Cellar Tracker",
                    "bottlesize": "750ml",
                    "region": "Piemonte",
                    "producer": "Gaja",
                    "alcoholcontent": "14%",
                    "country": "Itália",
                    "harmonization": "Carnes vermelhas, Carnes de caça, Cordeiros",
                    "type": "tinto",
                    "grape": "Nebbiolo",
                    "servingtemperature": "16 a 18°C",
                    "quantity": 1
                },
                
            ]

        },
        {
            "categoria": "tinto-espanha",
            "produtos": [
                {
                    "id": "004",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_vega_sicilia_unico_2009.png",
                    "name": "Vega Sicilia Unico 2006",
                    "price": 7732.76,
                    "descripition": "O Vinho Vega Sicilia Unico 2006 é o vinho ícone da Vega Sicilia, conquistando a pontuação perfeita do crítico James Suckling, incríveis 100 pontos! Produzido com um corte das uvas Tinto Fino (Tempranillo) e Cabernet Sauvignon, cultivadas a 600 metros de altitude, em vinha velhas, com trinta e cinco anos de idade média, dentro da região vitivinícola de Ribeira del Duero, na Espanha. De coloração rubi intensa com reflexos violáceos, revela, no nariz, aromas de frutas vermelhas maduras, notas de especiarias, nuances balsâmicas, além de toques de couro e tabaco, advindos do longo estágio em carvalho. Em boca, o Vinho Vega Sicilia Unico 2006 é complexo, contando com grande estrutura e um final longo e persistente. Esse rótulo desfruta de um excepcional potencial de guarda, podendo envelhecer por mais de meio século na garrafa!",
                    "winemaking": "O Vinho Vega Sicilia Unico 2006 é produzido com um corte das uvas Tinto Fino (Tempranillo - 94%) e Cabernet Sauvignon (6%), cultivadas a 600 metros de altitude, em vinha velhas, com trinta e cinco anos de idade média, dentro da região vitivinícola de Ribeira del Duero, na Espanha. A fermentação alcoólica é realizada com leveduras nativas em barris de carvalho. Ocorre fermentação malolática completa. O vinho envelhece durante um período total de dez anos, primeiro em barris de carvalho francês e americano, e depois na garrafa.",
                    "aboutproducer": "Vega Sicilia é um dos mais renomados produtores de vinho da Espanha e do mundo. Sua história remonta ao século XIX, quando foi fundada por Don Eloy Lecanda y Chaves, um visionário que plantou as primeiras videiras em Ribera del Duero, uma região vitivinícola de prestígio na Espanha. A propriedade foi adquirida em 1864 pela família Alvarez, que a transformou em uma vinícola de renome internacional. Sob a gestão da família Alvarez, a Vega Sicilia concentrou-se na produção de vinhos de alta qualidade, utilizando técnicas tradicionais e inovadoras. O vinho mais famoso da Vega Sicilia é o Unico, um tinto icônico e de longo envelhecimento, produzido principalmente a partir das variedades de uvas Tempranillo e Cabernet Sauvignon. Este vinho é conhecido por sua complexidade, elegância e capacidade de envelhecimento. Além do Unico, a Vega Sicilia produz outros vinhos de alta qualidade, como o Valbuena e o Alión, cada um com seu próprio perfil de sabor e caráter. A Vinícola Vega Sicilia é um símbolo de excelência na produção de vinhos espanhóis e continua a ser uma referência para os amantes do vinho em todo o mundo.",
                    "critics": "James Suckling",
                    "bottlesize": "750ml",
                    "region": "Ribera del Duero",
                    "producer": "Vega Sicilia",
                    "alcoholcontent": "14%",
                    "country": "Espanha",
                    "harmonization": "Carnes vermelhas, Carnes de caça, Cordeiros",
                    "type": "tinto",
                    "grape": "Cabernet Sauvignon, Tempranillo",
                    "servingtemperature": "18 a 20°C",
                    "quantity": 1
                },
                {
                    "id": "005",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_pingus.png",
                    "name": "Pingus 2015",
                    "price": 14000.00,
                    "descripition": "O Vinho Pingus é um dos melhores, e mais caros, vinhos do mundo! Lançado em 1995, foi o primeiro rótulo da Denominação de Origem (D.O.) de Ribeira del Duero a conquistar a pontuação perfeita do crítico Robert Parker. Produzido pelo Dominio de Pingus, do enólogo dinamarquês Peter Sisseck, com a uva Tinta del País, nome pelo qual a Tempranillo é conhecida na região, oriunda de vinhas velhas, plantadas em 1929. De coloração granada intensa, revela, no nariz, aromas de frutas vermelhas maduras, como de cereja e framboesa, notas florais, como de violeta e lilás, nuances de especiarias e toques minerais. Um Vinho Tinto de grande estrutura e concentração. Em boca, apresenta taninos refinados, ótima acidez e um final longo e persistente. O Pingus 2015 conta com um excelente potencial de guarda, podendo envelhecer por décadas, aproveite, pois foram produzidas apenas 6.900 garrafas deste grande vinho!",
                    "winemaking": "O Pingus 2015 é produzido 100% com a uva Tinta del País (Tempranillo), oriunda de vinhas velhas, plantadas em 1929, dentro da Denominação de Origem (D.O.) de Ribeira del Duero, na Espanha. As fermentações alcoólica e malolática ocorrem em barris de carvalho francês. O vinho matura em barris de carvalho francês durante um período de vinte a vinte dois meses.",
                    "aboutproducer": "Localizada na região de Ribera del Duero, na Espanha, Dominio de Pingus engarrafa vinhos em quantidades minúsculas, o que os torna raros e exclusivos, verdadeiros objetos de desejo. A propriedade é formada por pequenas vinhas velhas, espalhadas por diversos locais da região. Seu vinho mais importante, o Pingus, é elaborado com uvas de parreiras plantadas no ano de 1929, em solo predominantemente de cascalho e areia, com subsolos de argila, calcário e rendimentos baixíssimos. Os exemplares são fermentados em cubas e, em seguida, envelhecidos em barricas de carvalho, por 20 a 22 meses em média. Sua produção não passa de 6 mil garrafas por ano e a safra 2012, por exemplo, recebeu pontuação máxima de 100 pontos de Robert Parker e também de James Suckling. No comando da bodega está Peter Sisseck, renomado enólogo e agrônomo dinamarquês, nascido em 1962. A prestigiada vinícola era um sonho, o qual conseguiu concretizar com muito sucesso em 1995.",
                    "critics": "Robert Parker",
                    "bottlesize": "750ml",
                    "region": "Ribera del Duero",
                    "producer": "Dominio de Pingus",
                    "alcoholcontent": "14,5%",
                    "country": "Espanha",
                    "harmonization": "Carnes vermelhas, Carnes de caça, Queijos",
                    "type": "tinto",
                    "grape": "Tempranillo",
                    "servingtemperature": "16 a 18°C",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "tinto-portugal",
            "produtos": [
                {
                    "id": "006",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/q/u/quinta_do_vale_me_o.png",
                    "name": "Quinta do Vale Meão 2020",
                    "price": 1939.36,
                    "descripition": "O Vinho Quinta do Vale Meão é um um dos mais premiados Vinhos Tintos de Portugal na atualidade. O corte majoritariamente de Touriga Nacional, com Touriga Franca, Tinta Barroca e Tinta Roriz é produzido a partir do vinhedo que originou o mítico Barca Velha. Trata-se de um Vinho Tinto que transmite o inconfundível caráter da região do Douro com um nariz de grande profundidade, complexo, com muitas nuances aromáticas. Na boca, é vibrante, cheio de elegância, com camadas de sabores e madeira bem integrada, mostrando um final muito longo.",
                    "winemaking": "O Quinta do Vale Meão 2020 é produzido com um corte das uvas Touriga Nacional, Touriga Franca, Tinta Barroca e Tinta Roriz, oriundas de vinhedos no Douro, em Portugal.",
                    "aboutproducer": "A Quinta do Vale Meão, localizada na sub-região do Douro Superior, abriga os vinhedos que deram origem, em 1952, ao primeiro grande vinho tinto do Douro, o Barca Velha. A propriedade pertence, atualmente, aos descendentes da fundadora, Dona Antónia Adelaide Ferreira, e, a partir dos mesmos vinhedos, produz um ícone português dos novos tempos, o Quinta do Vale Meão, além dos ótimos Meandro do Vale Meão Tinto e Branco. A enologia da Quinta do Vale Meão fica nas mãos de Francisco Olazabal, que pertence à sexta geração da família Ferreira e está entre os grandes nomes do vinho português da atualidade.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Douro",
                    "producer": "Quinta do Vale Meão",
                    "alcoholcontent": "14%",
                    "country": "Portugal",
                    "harmonization": "Carnes vermelhas, Cordeiros",
                    "type": "tinto",
                    "grape": "Tempranillo, Tinta Barroca, Touriga Franca, Touriga Nacional",
                    "servingtemperature": "18 a 20°C",
                    "quantity": 1

                }
            ]
        },
        {
            "categoria": "branco-frança",
            "produtos": [
                {
                    "id": "007",
                    "image": "https://cdn.mistral.com.br/products/36732/img_m_36732.png",
                    "name": "Château d'Yquem 2018",
                    "price": 11423.30,
                    "descripition": "Quem oferece uma infinidade de sabores complexos e equilibrados que geram ainda mais harmonias ao longo do tempo. Este belo vinho doce apresenta um carácter forte, mas nunca autoritário, com grande elegância e equilíbrio.",
                    "winemaking": "O Château d'Yquem 2018 é um vinho doce feito de uvas Sauvignon Blanc e Sémillon, cultivadas em Sauternes, Bordeaux. As uvas são colhidas manualmente em várias seleções para garantir alta qualidade e concentração de açúcar, especialmente em anos de botrytis cinerea. A vinificação tradicional ocorre em barricas de carvalho francês, com fermentação controlada, seguida de 24 meses de maturação em barricas novas. O resultado é um vinho excepcional, com uma textura aveludada e um equilíbrio perfeito entre doçura e acidez, ideal para envelhecimento.",
                    "aboutproducer": "Bordeaux é a região vinícola mais famosa do mundo, reconhecida por seus Châteaux que produzem vinhos elegantes e de alta qualidade. Embora os tintos secos sejam os mais comuns, os brancos, especialmente os doces de Sauternes, são altamente valorizados.Sauternes, a 65 km de Bordeaux, é famoso por seus vinhos brancos doces, que envelhecem bem e apresentam uma cor dourada intensa, tornando-se âmbar com o tempo, com aromas frutados e notas de flor madressilva, equilibrando doçura e acidez.Os vinhos de Bordeaux são geralmente blends de uvas como Sémillon, Sauvignon Blanc e Muscadelle.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Bordeaux",
                    "producer": "Bordeaux - Brancos Doces",
                    "alcoholcontent": "13,5%",
                    "country": "França",
                    "harmonization": "Sobremesas leves e frutas",
                    "type": "branco",
                    "grape": "Sémillon, Sauvignon Blanc",
                    "servingtemperature": "11 a 13ºC",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "branco-alemanha",
            "produtos": [
                {
                    "id": "008",
                    "image": "https://cdn.mistral.com.br/products/37263/img_m_37263.png",
                    "name": "Joh. Jos. Prüm Wehlener Sonnenuhr Spätlese 2021",
                    "price": 803.07,
                    "descripition": "O Wehlener Sonnenuhr Spätlese, da Joh. Jos. Prüm, é um dos mais renomados vinhos Crus, conhecido por sua complexidade e longevidade. Este Spätlese é uma referência em vinhos de sobremesa, podendo envelhecer por décadas. Para melhor apreciação, deve ser decantado se consumido antes de 10 anos. Seus aromas refrescantes lembram alecrim, hortelã, frutas e flores brancas, e na boca é equilibrado, com um final longo e estruturado. Na safra 2021, recebeu 95 pontos da Vinous, que o descreve como maravilhoso.",
                    "winemaking": "O vinho é produzido através de fermentação espontânea em tanques de aço inoxidável, utilizando leveduras naturais, o que confere complexidade aromática e caráter distintivo. Após a colheita, as uvas são selecionadas e maceradas antes da fermentação, que ocorre em temperatura controlada para preservar suas características varietais. Esse método resulta em um vinho equilibrado e estruturado, que pode ser maturado em barricas, conforme o estilo desejado.",
                    "aboutproducer": "J.J. Prüm é considerado o principal nome da região de Mosel e um dos maiores produtores de vinhos do mundo. Robert Parker o classifica como uma das melhores vinícolas, com vinhos extraordinários e de grande longevidade. Especializado na uva Riesling, J.J. Prüm cultiva vinhedos em algumas das melhores áreas de Mosel, produzindo vinhos brancos de alta complexidade, elegância e riqueza. A propriedade de 34 acres produz cerca de 13 mil caixas por ano, com colheita tardia e excelente potencial de envelhecimento. Seus vinhos, especialmente os auslesen, são reconhecidos pela delicadeza e longevidade, com avaliações altas, como 93 pontos da Wine Spectator.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Mosel",
                    "producer": "J.J. Prüm",
                    "alcoholcontent": "7%",
                    "country": "Alemanha",
                    "harmonization": "Sobremesas e frutas, como tortas de maça ou strude",
                    "type": "branco",
                    "grape": "Riesling",
                    "servingtemperature": "07 a 09ºC",
                    "quantity": 1

                }
            ]
        },
        {
            "categoria": "branco-italia",
            "produtos": [
                {
                    "id": "009",
                    "image": "https://cdn.mistral.com.br/products/36662/img_m_36662.png",
                    "name": "Gaja Gaia & Rey Chardonnay 2020",
                    "price": 3443.63,
                    "descripition": "Este Chardonnay italiano é considerado um dos melhores brancos da Itália, com capacidade de envelhecer por mais de 10 anos. Robert Parker compara sua qualidade aos Grand Crus de Puligny-Montrachet, na Borgonha, devido à sua sofisticação. O vinho é uma homenagem a Gaia, filha de Angelo Gaja, e sua avó, Clothilde Rey. Potente, elegante e refinado, ele é maturado em barricas novas e de segundo uso, resultando em um vinho complexo e encorpado, sem perder a vivacidade da fruta. Com o tempo, desenvolve notas elegantes de mel e amêndoas.",
                    "vinemaking": "A vinificação tradicional deste vinho é realizada com uvas cuidadosamente selecionadas e fermentadas em tanques de aço inoxidável sob controle rigoroso de temperatura, variando entre 16°C e 18°C, durante um período de quatro semanas. A fermentação malolática ocorre naturalmente após a fermentação alcoólica, contribuindo para a suavização da acidez e a adição de textura ao vinho. Todo o processo é conduzido com precisão para garantir a preservação da pureza da fruta e a expressão do terroir, resultando em um vinho equilibrado e complexo.",
                    "aboutproducer": "Angelo Gaja é um dos maiores nomes do vinho italiano, responsável por revolucionar a vinicultura do país nos últimos 40 anos. Ele foi várias vezes eleito Homem do Ano por revistas renomadas e acumula mais de 60 prêmios tre bicchieri do Gambero Rosso, sendo o único a receber sei stelle. Seus vinhos, como o Barbaresco, Sperss e Conteisa, são ícones de complexidade e elegância, feitos com uvas de vinhedos únicos de Barolo. Gaja também se destaca com o Cabernet Sauvignon Darmagi e o corte Sito Moresco. Além dos tintos, seus vinhos brancos, como o Gaia&Rey, competem com os maiores Chardonnays do mundo. A vinícola, fundada em 1859 por Giovanni Gaja, continua sendo referência sob o comando de Angelo, com produções limitadas e disputadas, incluindo propriedades na Toscana.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Piemonte",
                    "producer": "Gaja",
                    "alcoholcontent": "13,5%",
                    "country": "Italia",
                    "harmonization": "Carnes grelhadas, carnes brancas, pato e queijos.",
                    "type": "branco",
                    "grape": "Chardonnay",
                    "servingtemperature": "11 a 13ºC",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "espumante-frança",
            "produtos": [
                {
                    "id": "010",
                    "image": "https://images.vivino.com/thumbs/s5aXYaQiTu-V_xEYI3KXRg_pb_x600.png",
                    "name": "Dom Pérignon",
                    "price": 3988.00,
                    "descripition": "Dom Pérignon Brut Champagne é um vinho icônico, produzido pela renomada casa de champanhe Moët & Chandon, sendo símbolo de luxo e excelência. Seu nome homenageia o monge beneditino Dom Pérignon, que contribuiu para o desenvolvimento da produção de champanhe. Feito a partir de uma mistura de uvas Chardonnay e Pinot Noir selecionadas manualmente, o processo de vinificação é caracterizado por precisão e métodos tradicionais. O champanhe se destaca pelo buquê complexo de frutas cítricas, flores, brioche e minerais, com um sabor equilibrado entre frescor, cremosidade e vivacidade, finalizado com notas de maçã verde, pêra e amêndoas torradas.",
                    "winemaking": "A maturação suculenta domina, e uma sensação tátil segue-se à experiência aromática. Na boca é generoso, firme e assertivo. Depois adensa-se, libertando vibrações apimentadas de especiarias. A energia perdura até um final salino cintilante",
                    "aboutproducer": "Dom Pérignon é sempre um champanhe vintage, produzido exclusivamente com uvas de um único ano, o que pode resultar na ausência de safra em anos menos favoráveis. Apenas as melhores uvas dos anos mais excepcionais são usadas, tornando cada safra única. Esse compromisso absoluto reflete o Poder da Criação, elevando a experiência sensorial e estética. A busca pela harmonia é central na produção do Dom Pérignon, que valoriza a precisão, intensidade, toque, mineralidade, complexidade e completude. Esses elementos combinam-se para criar vinhos de alta qualidade e distinta emoção.",
                    "critics": "Wine Enthusiast",
                    "bottlesize": "750ml",
                    "region": "Champagne",
                    "producer": "Dom Pirignon",
                    "alcoholcontent": "12,5%",
                    "country": "França",
                    "harmonization": "Carne de Porco, frutos do mar, peixes, queijos suaves.",
                    "type": "espumante",
                    "grape": "Chardonnay , Pinot Noir",
                    "servingtemperature": "6° A 8°C",
                    "quantity": 1
                },
                {
                    "id": "011",
                    "image": "https://cdn.mistral.com.br/products/35663/img_m_35663.png",
                    "name": "Champagne Bollinger La Grande Année 2014",
                    "price": 2003.38,
                    "descripition": "La Grande Année, considerado o melhor Champagne de 2020 pela Wine Spectator e um dos 10 melhores vinhos do mundo, também é altamente elogiado por críticos como Robert Parker e Jancis Robinson. Feito com uma grande proporção de Pinot Noir e fermentado em barricas de carvalho, é um champanhe encorpado e complexo. As uvas são selecionadas exclusivamente de vinhedos Grand Cru e Premier Cru, garantindo uma qualidade excepcional. O processo de autólise de 6 anos contribui para sua complexidade e longevidade, tornando-o um dos champanhes mais prestigiados no mundo.",
                    "winemaking": "O Champagne Bollinger La Grande Année 2014 é elaborado majoritariamente com Pinot Noir e Chardonnay, provenientes de vinhedos classificados como Grand Cru e Premier Cru na região de Champagne, na França. As uvas são colhidas e selecionadas manualmente para garantir a máxima qualidade. A fermentação é realizada em barricas de carvalho sob temperatura controlada, preservando as características aromáticas e estruturais do vinho. O processo de autólise ocorre por um período mínimo de seis anos, conferindo maior complexidade e longevidade ao champagne. Após o envelhecimento, o vinho passa pelo remuage e dégorgement, finalizando com a adição de uma dosagem mínima.",
                    "aboutproducer": "Bollinger é uma vinícola lendária da região de Champagne, fundada em 1829, e reconhecida como uma das melhores do mundo. Ela recebeu as máximas cinco estrelas de Robert Parker e três estrelas do guia Bettane & Desseauve. Bollinger produz duas assemblages principais: a Spécial Cuvée e a Grande Année. A Spécial Cuvée Brut é considerada uma das melhores cuvées não-safradas, com 93 pontos da Wine Spectator. A Grande Année, de produção limitada, é refinada e complexa, e o R.D. (Récemment Dégorgé) é um raro exemplar. Suas vinhas, em grande parte Grand Cru, são dominadas pela Pinot Noir. A vinícola amadurece seus vinhos por mais tempo que o exigido, garantindo qualidade excepcional.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Champagne",
                    "producer": "Bollinger",
                    "alcoholcontent": "12%",
                    "country": "França",
                    "harmonization": "Aperitivos, carnes brancas e peixes.",
                    "type": "espumante",
                    "grape": "Chardonnay , Pinot Noir",
                    "servingtemperature": "09 a 12ºC",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "espumante-italia",
            "produtos": [
                {
                    "id": "012",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/f/e/ferrari_trento_maximum_brut.png",
                    "name": "Ferrari Trento Maximum Brut",
                    "price": 466.00,
                    "descripition": "O Espumante Ferrari Trento Maximum Brut é elaborado pela famosa vinícola Ferrari, na região de Trentino-Alto Ádige, no norte da Itália. No nariz, revela notas tostadas combinadas a toques de maçã, frutas cítricas e de biscoito. Em boca, é cremoso e persistente, com acidez vibrante e perlage refinada.",
                    "winemaking": "O Ferrari Trento Maximum Brut é produzido com a uva Chardonnay, oriunda de vinhedos na região de Trentino-Alto Ádige, na Itália. A fermentação alcoólica acontece em cubas de aço inoxidável, sob temperatura controlada. É realizada fermentação malolática completa. O espumante permanece na garrafa após a segunda fermentação, em contato com as borras, durante um período 36 meses.",
                    "aboutproducer": "A vinícola Ferrari é uma das estrelas do norte da Itália. Sua história remonta ao início do século XX, com Giulio Ferrari produzindo, em 1902, espumantes em Trentino capazes de desafiar os grandes champagnes. Em 1952, a Ferrari passou para as mãos Bruno Lunelli, proprietário de uma loja de vinhos no Trento, que manteve o elevado padrão de qualidade da vinícola. Até hoje, a Ferrari pertence à família Lunelli, com a terceira geração no comando dos negócios. Tradição e inovação são duas linhas mestras da gestão dos Lunelli e, ao longo das últimas décadas, eles souberam se reinventar, aumentando as opções do portfólio da casa com vinhos como Ferrari Rosé, Ferrari Perlé e Giulio Ferrari Riserva del Fondatore. Tanto os espumantes clássicos como as novidades da vinícola são considerados no mundo todo como sinônimo de alta qualidade.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Trentino-Alto Ádige",
                    "producer": "Ferrari",
                    "alcoholcontent": "12,5%",
                    "country": "Italia",
                    "harmonization": "Peixes, frutos do mar, sushi e sashimi.",
                    "type": "espumante",
                    "grape": "Chardonnay",
                    "servingtemperature": "07 a 09ºC",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "sobremesa-frança",
            "produtos": [
                {
                    "id": "013",
                    "image": "https://cdn.mistral.com.br/products/36732/img_m_36732.png",
                    "name": "Château d'Yquem 2018",
                    "price": 11423.30,
                    "descripiton": "Quem oferece uma infinidade de sabores complexos e equilibrados que geram ainda mais harmonias ao longo do tempo. Este belo vinho doce apresenta um carácter forte, mas nunca autoritário, com grande elegância e equilíbrio.",
                    "winemaking": "O Château d'Yquem 2018 é um vinho doce feito de uvas Sauvignon Blanc e Sémillon, cultivadas em Sauternes, Bordeaux. As uvas são colhidas manualmente em várias seleções para garantir alta qualidade e concentração de açúcar, especialmente em anos de botrytis cinerea. A vinificação tradicional ocorre em barricas de carvalho francês, com fermentação controlada, seguida de 24 meses de maturação em barricas novas. O resultado é um vinho excepcional, com uma textura aveludada e um equilíbrio perfeito entre doçura e acidez, ideal para envelhecimento.",
                    "aboutproducer": "Bordeaux é a região vinícola mais famosa do mundo, reconhecida por seus Châteaux que produzem vinhos elegantes e de alta qualidade. Embora os tintos secos sejam os mais comuns, os brancos, especialmente os doces de Sauternes, são altamente valorizados.Sauternes, a 65 km de Bordeaux, é famoso por seus vinhos brancos doces, que envelhecem bem e apresentam uma cor dourada intensa, tornando-se âmbar com o tempo, com aromas frutados e notas de flor madressilva, equilibrando doçura e acidez.Os vinhos de Bordeaux são geralmente blends de uvas como Sémillon, Sauvignon Blanc e Muscadelle.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Bordeaux",
                    "producer": "Bordeaux - Brancos Doces",
                    "alcoholcontent": "13,5%",
                    "country": "França",
                    "harmonization": "Sobremesas leves e frutas",
                    "type": "branco",
                    "grape": "Sémillon, Sauvignon Blanc",
                    "servingtemperature": "11 a 13ºC",
                    "quantity": 1
                }
            ]    
        },
        {
            "categoria": "sobremesa-hungria",
            "produtos": [
                {
                    "id": "014",
                    "image": "https://cdn.mistral.com.br/products/37449/img_m_37449.png",
                    "name": "Tokaji Aszú 5 Puttonyos 1993",
                    "price": 2467.78,
                    "descripition": "Um maravilhoso e tradicional vinho de sobremesa, o 5 Puttonyos é mais doce, rico e completo. Seu aroma é puro e complexo. No palato é encorpado e untuoso, muito equilibrado, com perfeita acidez e um longuíssimo final de boca. Seu estilo é limpo e sofisticado, nada oxidativo e muito prazeroso. Um belo achado, com a assinatura de Vega Sicilia!",
                    "winemaking": "Adicionado 5 cestos (puttonyos) contendo 25 kg (cada cesto) de bagas nobres de Aszú, colhidas individualmente e cobertas de Botrytis adicionadas ao mosto base. As uvas são maceradas durante 12-24 horas até incharem, antes de serem suavemente prensadas. A fermentação ocorre em barricas novas de carvalho húngaro. É um processo lento que pode levar até 1 mês",
                    "aboutproducer": "Em 1993, a família Álvarez, dona do Vega Sicilia, adquiriu os vinhedos históricos de Oremus, em Tokaj, uma região tombada pela Unesco. Tokaj foi a primeira a produzir vinhos com uvas afetadas pela Botrytis cinerea, antes mesmo de Sauternes, e seus vinhos tiveram grande importância histórica e diplomática. Sob a direção dos Álvarez, os vinhos de Oremus, como o Tokaji Aszú e o Furmint Late Harvest, se destacam pela fineza, equilíbrio e concentração. O Mandolás, um Furmint seco, foi incluído entre os 100 melhores vinhos de 2020 pela Wine Spectator, e o recém-lançado Petracs é comparado aos grandes brancos da Borgonha.",
                    "critics": "Wine Spectator",
                    "bottlesize": "500ml",
                    "region": "Tokaj",
                    "producer": "Tokaj Oremus (Vega Sicilia)",
                    "alcoholcontent": "11,5%",
                    "country": "Hungria",
                    "harmonization": "Sobremesas leves e frutas",
                    "type": "Branco Doce",
                    "grape": "Furmint, Hárslevelü, Zéta e Sárgauskotály",
                    "servingtemperature": "06 a 09ºC",
                    "quantity": 1
                }
            ]
        },
        {
            "categoria": "fortificado-portugal",
            "produtos": [
                {
                    "id": "015",
                    "image": "https://cdn.mistral.com.br/products/1394/img_m_1394.png",
                    "name": "Graham's 20 Years Old Tawny",
                    "price": 827.73,
                    "descripition": "Uma verdadeira obra prima da arte de combinar diversos vinhos envelhecidos, que na média  têm aproximadamente 20 anos, o Graham's 20 Years Old é mais claro e fantasticamente macio que o 10 anos. Possui um clássico bouquet de nozes e um final longo e prazeroso. Um Porto de grande classe e requinte.",
                    "winemaking": "Seleções dos melhores vinhos. Após 2 a 3 dias de fermentação, é adicionado aguardente vínico para interromper a fermentação. Elevando assim o açúcar e os alcoóis residuais do resultado final do vinho. Maturados em média 20 anos em barricas de 534 litros de carvalho são combinados para dar origem a este soberbo 20 anos.",
                    "aboutproducer": "A Graham’s, fundada em 1820 pelos irmãos Graham, é uma das mais renomadas produtoras de vinhos do Porto, com mais de um século de tradição no Douro. A parceria com a família Symington, iniciada em 1882, consolidou sua reputação, e desde a década de 1970, a empresa é gerida pelos descendentes de Andrew James Symington. Produzindo vinhos há cinco gerações, a Graham’s é reconhecida por seus Portos excepcionais, dos jovens Ruby aos Vintages, elaborados em anos excepcionais. Seus Tawnies envelhecidos também são notáveis, como o Graham’s 30 e 40 years Old Tawny, premiados com as mais altas notas pela Wine Spectator e Jancis Robinson.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Porto",
                    "producer": "Graham’s",
                    "alcoholcontent": "20%",
                    "country": "Portugal",
                    "harmonization": "aperitivos, sobremesas, chocolate",
                    "type": "Porto",
                    "grape": "Touriga Franca, Touriga Nacional, Tinta Barroca, Tinta Roriz",
                    "servingtemperature": "14 a 16ºC",
                    "quantity": 1
                },    
                {
                    "id": "016",
                    "image": "https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/p/o/porto_taylo_s_tawny_10_anos.png",
                    "name": "Taylor’s Tawny 10 Anos",
                    "price": 498.00,
                    "descripition": "O Vinho do Porto Taylor’s Tawny 10 Anos é assinado pela Taylor’s, uma das mais renomadas e tradicionais casas de Vinho do Porto de Portugal. Produzido com um corte das uvas Touriga Nacional, Touriga Franca, Tinto Cão, Tinta Roriz (Tempranillo) e Tinta Barroca, oriundas de vinhedos localizados nas zonas do Cima Corgo e Douro Superior, dentro da região vitivinícola do Douro. De coloração vermelho tijolo com reflexos âmbar, no nariz revela um bouquet aromático rico, onde destacam-se aromas frutados, notas de chocolate e caramelo, além de um toque amadeirado. Em boca conta com taninos macios e um final longo e persistente.",
                    "winemaking": "O Taylor’s Tawny 10 Anos é produzido com um corte das uvas Touriga Nacional, Touriga Franca, Tinto Cão, Tinta Roriz (Tempranillo) e Tinta Barroca, oriundas de vinhedos localizados nas zonas do Cima Corgo e Douro Superior, dentro da região vitivinícola do Douro, em Portugal. O vinho envelhece em barris de carvalho de 630 litros durante um período de aproximadamente dez anos.",
                    "aboutproducer": "A Taylor's é uma das mais renomadas e tradicionais casas de vinho do Porto de Portugal. Fundada em 1692, pelo comerciante inglês Job Bearsley, é uma empresa independente, na qual alguns membros da família desempenham papéis de liderança em todas as áreas de atividade. Sediada no Porto e na região do Douro, a Taylor’s está envolvida em todas as fases da produção dos seus vinhos do Porto, desde o plantio dos vinhedos e cultivo das uvas, até o envelhecimento e engarrafamento. O compromisso da família com o futuro do vinho do Porto é demonstrado na sua determinação em preservar o ambiente único da região do Douro, através da promoção de uma viticultura sustentável e responsável.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Douro",
                    "producer": "Taylor’s",
                    "alcoholcontent": "20%",
                    "country": "Portugal",
                    "harmonization": "aperitivos, sobremesas a base de frutas, chocolate",
                    "type": "Porto",
                    "grape": "Touriga Franca, Touriga Nacional, Tinta Barroca, Tinto Cão, Tempranillo",
                    "servingtemperature": "16 a 18ºC",
                    "quantity": 1
                }
            ]    
        },
        {
            "categoria": "fortificado-espanha",
            "produtos": [
                {
                    "id": "017",
                    "image": "https://images.vivino.com/thumbs/ZgaHRIsZRG6HB0t_Da8DHA_pb_x600.png",
                    "name": "González Byass",
                    "price": 326.66,
                    "descripition": " Com uma cor mogno muito escura e intensa. Aromas muito doces de passas e caramelo, com toques de madeira. Aveludado e ricamente doce no paladar, lembra passas e tâmaras envelhecidas, com um final longo e vibrante.",
                    "winemaking": " González Byass é um PX jovem que mostra aromas ricos de frutas frescas, como passas, e toques de mel, xarope e conserva de frutas. No paladar, é aveludado e suave, com boa acidez que alivia a doçura. Perfeito com sobremesas como sorvete de baunilha, chocolate preto e cheesecake.",
                    "aboutproducer": "A vinícola González-Byass, fundada em 1835, está localizada em Jerez de la Frontera, na região de Jerez-Xérès-Sherry, Espanha, conhecida por produzir alguns dos mais renomados vinhos fortificados do mundo. A empresa é famosa por seu emblemático Tío Pepe, um dos finos mais icônicos e apreciados globalmente. Ao longo de sua história, González-Byass tem se destacado pela inovação, sem perder de vista a tradição, combinando técnicas ancestrais com práticas modernas de vinificação. Com vinhedos cultivados em solos de albariza, ideais para o cultivo da uva Palomino, seus vinhos refletem o terroir singular da região. Além dos vinhos de Jerez, a vinícola expandiu sua produção para outras regiões vinícolas da Espanha, consolidando-se como uma das mais importantes do país.",
                    "critics": "Wine Spectator",
                    "bottlesize": "750ml",
                    "region": "Jerez-Xérès-Sherry",
                    "producer": "Gonzalez-Byass",
                    "alcoholcontent": "15,5%",
                    "country": "Espanha",
                    "harmonization": "Sobremesas e queijo azul",
                    "type": "Pedro Ximenez Espanhol",
                    "grape": "Pedro Ximenez",
                    "servingtemperature": "14 a 16ºC",
                    "quantity": 1
                }
            ]
        }
    ]
}



fastify.get('/produtos', async function handler(request, reply) {
    const categoria = request.query.categoria;

    console.log(categoria)

    const produtoFiltrado = produtos.produtos.find(produto => produto.categoria === categoria)
    
    return produtoFiltrado
    
    // .filter(produtos => {
    //     if (search) {
    //         return produtos.categoria.includes(search)
    //     }

    //     return true
    // })

})



fastify.post('/produtos/id', async function handler(request, reply) {




    let requestId = request.body["id"]

    let filter = []

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == requestId) {
            filter.push(produtos[i])
        } continue
    }


    return { "itens": filter }


})

fastify.delete('/produtos/delete/id', async function handler(request, reply) {




    let requestId = request.body["id"]

    let filter = []

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == requestId) {
            filter.push(produtos[i])
        } continue
    }


    return { "itens": filter }


})



// fastify.post('/produtos/', async function handler (request, reply) {


//     let requestList = request.body["list"]
//     let requestCountry = request.body["country"]


//     let filter = []

//     for ( let i = 0 ; i < produtos.length; i++ ) {
//         if ((produtos[i].list == requestList && (produtos[i].country == requestCountry))) {
//             filter.push(produtos[i])
//         } continue
//     }


//     return { "itens": filter }


// })





try {
    await fastify.listen({ port: PORT })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}




            
                