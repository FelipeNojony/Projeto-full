// import { useContext } from 'react';
import './index.css'
import propTypes from 'prop-types'
// import AppContext from '../../../../../context/Appcontext';

export default function ItensPedidos() {
    // const { image, name, price } = data;
//   const {produtos, setProdutos} = useContext(AppContext)

  return (
    <>
        <section className="item-pedidos">
            <img src="" alt="imagem do vinho" className="img-item-pedidos"/>

            <div className="conteudo-pedidos">
                <h3 className="titulo-pedidos">Nome do vinho</h3>
                <h3 className="preco-pedidos">R$ 122000</h3>

            </div>

        </section>
    </>
  );
}
ItensPedidos.propTypes = {
    data: propTypes.object
  }.isRequired

