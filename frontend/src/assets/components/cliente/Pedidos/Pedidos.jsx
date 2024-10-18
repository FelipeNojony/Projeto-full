import ItensPedidos from "./ItensPedidos/ItensPedidos";
import AppContext from '../../../../context/Appcontext';
import { useContext } from 'react';
import './index.css'




export default function Pedidos() {
    const { produtos, pedidosVisivel } = useContext(AppContext)
    const valorTotalPedidos = produtos.reduce((acc, item) => acc + (item.price), 0);

    return (
        <>
            <section className={`pedidos ${pedidosVisivel ? 'pedidos-active' : ''}`}>
                <div className="itens-pedidos">

                    
                        <ItensPedidos  />
                
                </div>

                <div className="resumo-pedidos">
                    {valorTotalPedidos.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </div>

            </section>
        </>
    );
}

