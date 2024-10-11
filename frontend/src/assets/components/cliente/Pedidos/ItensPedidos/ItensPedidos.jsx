// import { useContext } from 'react';
import './index.css'
import propTypes from 'prop-types'
// import AppContext from '../../../../../context/Appcontext';

export default function ItensPedidos({ data }) {
    const { image, name, price } = data;
//   const {produtos, setProdutos} = useContext(AppContext)

  return (
    <>
        <section className="item-pedidos">
            <img src={image} alt="imagem do vinho" className="img-item-pedidos"/>

            <div className="conteudo-pedidos">
                <h3 className="titulo-pedidos">{name}</h3>
                <h3 className="preco-pedidos">{price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}</h3>

            </div>

        </section>
    </>
  );
}
ItensPedidos.propTypes = {
    data: propTypes.object
  }.isRequired

