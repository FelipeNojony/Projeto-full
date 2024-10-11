import { useContext } from 'react';
import './index.css'
import propTypes from 'prop-types'
import AppContext from '../../../../../context/Appcontext';

export default function   ItemCarrinho({ data }) {
  const { id, image, name, price } = data;
  const {produtos, setProdutos} = useContext(AppContext)

  const removerItem = () => {
    const itemremovido = produtos.filter((item) => item.id != id)
    setProdutos(itemremovido)
  }
 

  return (
    <>
      <section className='item-carrinho'>
        <img src={image} alt="imagem do vinho" className='img-item-carrinho' />

        <div className='conteudo-carrinho'>
          <h3 className='titulo-produto'>{name}</h3>
          <h3 className='preco-produto'>{price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}</h3>

          <button type="button" className='btn-remover'
          onClick={ removerItem }>
            <i className='bx bx-x-circle'></i>
          </button>
        </div>

      </section>
    </>
  );
}
ItemCarrinho.propTypes = {
  data: propTypes.object
}.isRequired
