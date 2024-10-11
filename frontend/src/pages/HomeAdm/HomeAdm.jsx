import { useNavigate } from 'react-router-dom';
import { useState} from 'react';

import Header from '../../assets/components/cliente/Header/Header';
import CadastroAdm from '../../assets/components/adm/CadastroAdm/Cadastroadm';

import './index.css'

export default function HomeAdm() {

    const [openCadastroAdm, setOpenCadastroAdm] = useState(false)

    const navigate = useNavigate();

    const mudarpage = (path) => {
        navigate(path);
    }

    return (
        <>

            <Header />

            <main className="container content-homeadm">

                <div className='centro'>

                <div className="option" onClick={ () => mudarpage('/acompanhamenento-pedidos') } >
                    <p>Acompanhamento de Pedidos</p>
                </div>

                <div className="option" onClick={ () => mudarpage('/cadastroProdutos') }>
                    <p>Cadastro de Produtos</p>
                </div>

                <div className="option" onClick={ () => mudarpage('/painelclientes') }>
                    <p>Central de Clientes</p>
                </div>

                <div className="option" onClick={() => setOpenCadastroAdm(true)}>
                    <p>Informações da Loja</p>
                </div>

                <CadastroAdm isOpen={openCadastroAdm} />

                </div>


            </main>

        </>
    )
}