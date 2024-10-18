import { Link } from "react-router-dom";
import './index.css'
import { useContext } from "react";
import AppContext from "../../../../context/Appcontext";



export default function Header() {

    const { produtos, carrinhoVisivel, setCarrinhoVisivel, pedidosVisivel, setPedidosVisivel } = useContext(AppContext)

    

    return (
        <header>

            <nav className='container navbar'>

                <Link className="nav-logo" to={"/home"}><img src="src/assets/img/logo-navbar.png" alt="Logo Wine Experience" className="logo-nav" /></Link>

                <ul>
                    <li className="links-navbar"> <Link to={"/home"} >Home</Link> </li>

                    <li className="links-navbar"> <Link to={"/blog"} >Blog</Link> </li>

                    <li className="links-navbar"> <Link to={"/company"} >Company</Link> </li>
                </ul>

                <ul>
                    <li>
                        <button type="button" className="btn-pedidos"
                        onClick={() => setPedidosVisivel(!pedidosVisivel) }>
                            <i className='bx bx-notepad'></i>
                            {/* {produtos.length > 0 && <span className="status-pedidos">{produtos.length}</span>} */}
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn-carrinho"
                        onClick={() => setCarrinhoVisivel(!carrinhoVisivel)}>
                            <i title="Carrinho" className='bx bx-cart'></i>
                            {produtos.length > 0 && <span className="status-carrinho">{produtos.length}</span>}
                        </button>

                    </li>

                    <li>
                        <button type="button" className="btn-user">
                        <i className='bx bx-user'></i>
                        </button>
                    </li>


                </ul>


            </nav>

        </header>
    );
}