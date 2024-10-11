import Header from "../../assets/components/cliente/Header/Header";
import Footer from "../../assets/components/cliente/Footer/Footer";

import "./index.css";

export default function Pedidos() {
	return (
		<>
			<Header />

			<main className="container main-pedidos">
				<h1 className="meus-pedidos">Meus Pedidos</h1>

				<div className="pedidos">

					<div className="pedido">
						<div className="card-pedido">
							<div className="card-titulo">
								<h3>30 de abril de 2024 | R$ 21980,00</h3>
							</div>
							<div className="numero-pedido">
								<p>Pedido 24513584</p>
							</div>
							<div className="info-pedido">
								<div className="imagem-produto">
									<img
										src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png"
										alt="imagem do produto comprado"
									/>
								</div>
								<div className="nome-produto">
									<span> Château Margaux</span>
									<span> Grand Cru Classé 2017</span>
									<div className="litragem">
										<span> 750ml </span>
									</div>
								</div>
								<div className="info-produto">
									<span> 1un - R$ 10990,00</span>
								</div>
							</div>
						</div>

						<div className="card-pedido">
							<div className="info-pedido">
								<div className="imagem-produto">
									<img
										src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png"
										alt="imagem do produto comprado"
									/>
								</div>
								<div className="nome-produto">
									<span> Château Margaux</span>
									<span> Grand Cru Classé 2017</span>
									<div className="litragem">
										<span> 750ml </span>
									</div>
								</div>
								<div className="info-produto">
									<span> 1un - R$ 10990,00</span>
								</div>
							</div>
						</div>
					</div>
                    
					<div className="pedido">

						<div className="card-pedido">
							<div className="card-titulo">
								<h3>30 de abril de 2024 | R$ 21980,00</h3>
							</div>
							<div className="numero-pedido">
								<p>Pedido 24513584</p>
							</div>
							<div className="info-pedido">
								<div className="imagem-produto">
									<img
										src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png"
										alt="imagem do produto comprado"
									/>
								</div>
								<div className="nome-produto">
									<span> Château Margaux</span>
									<span> Grand Cru Classé 2017</span>
									<div className="litragem">
										<span> 750ml </span>
									</div>
								</div>
								<div className="info-produto">
									<span> 1un - R$ 10990,00</span>
								</div>
							</div>
						</div>
						<div className="card-pedido">
							<div className="info-pedido">
								<div className="imagem-produto">
									<img
										src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png"
										alt="imagem do produto comprado"
									/>
								</div>
								<div className="nome-produto">
									<span> Château Margaux</span>
									<span> Grand Cru Classé 2017</span>
									<div className="litragem">
										<span> 750ml </span>
									</div>
								</div>
								<div className="info-produto">
									<span> 1un - R$ 10990,00</span>
								</div>
							</div>
						</div>
					</div>
                    
				</div>
			</main>

			<Footer />
		</>
	);
}
