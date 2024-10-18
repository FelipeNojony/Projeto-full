import { useContext } from 'react';
import './index.css'
import ItemCarrinho from './ItemCarrinho/ItemCarrinho';
import AppContext from '../../../../context/Appcontext';
import propTypes from 'prop-types';


export default function Carrinho() {
    
    const { produtos, carrinhoVisivel } = useContext(AppContext)
    const valorTotal = produtos.reduce((acc, item) => acc + (item.price), 0);
    // const AdicionarPedido = () => setProdutos([...produtos, data])

    
  return (
    <>
        <section className={`carrinho ${carrinhoVisivel ? 'carrinho-active' : ''}`}>
            <div className="itens-carrinho">
                
                 {produtos.map((itemCarrinho) => (
                  <ItemCarrinho key={itemCarrinho.id} data={itemCarrinho}/>
                  ))}
                  
                
            </div>

            <div className="resumo-carrinho">{valorTotal.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}

                <div className='finalizar'>
                  {produtos.length > 0 && <button type='button' className='btn-finalizar'>Finalizar</button>}
                </div>
            </div>
        </section>
    </>
  );
}
Carrinho.propTypes = {
  data: propTypes.object
}.isRequired;

