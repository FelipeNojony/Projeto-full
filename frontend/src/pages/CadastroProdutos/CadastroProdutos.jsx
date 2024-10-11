import { useState } from 'react';

import Header from '../../assets/components/cliente/Header/Header';

import TintosAdm from '../../assets/components/adm/vinhosAdm/TintosAdm/TintosAdm';
import BrancosAdm from '../../assets/components/adm/vinhosAdm/BrancosAdm/BrancosAdm';
import EspumanteAdm from '../../assets/components/adm/vinhosAdm/EspumanteAdm/EspumanteAdm';
import SobremesaAdm from '../../assets/components/adm/vinhosAdm/SobremesaAdm/SobremesaAdm';
import FortificadoAdm from '../../assets/components/adm/vinhosAdm/FortificadoAdm/FortificadoAdm';

import './index.css';

export default function CadastroProdutos() {

    const [vinhoAtual, setVinhoAtual] = useState('TintosAdm');

    return (
        <>

            <Header />

            <main className='content-produtos'>

                <h1 className='top'>Cadastro de Produtos</h1>

                <div className="container btn-vinhos">

                    <button id={vinhoAtual === 'TintosAdm' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('TintosAdm')}>Tintos
                    </button>

                    <button id={vinhoAtual === 'BrancosAdm' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('BrancosAdm')}>Brancos
                    </button>

                    <button id={vinhoAtual === 'EspumanteAdm' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('EspumanteAdm')}>Espumantes
                    </button>

                    <button id={vinhoAtual === 'SobremesaAdm' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('SobremesaAdm')}>Sobremesa
                    </button>

                    <button id={vinhoAtual === 'FortificadoAdm' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoAtual('FortificadoAdm')}>Fortificado
                    </button>

                </div>

                    {vinhoAtual === 'TintosAdm' && <TintosAdm />}
                    {vinhoAtual === 'BrancosAdm' && <BrancosAdm />}
                    {vinhoAtual === 'EspumanteAdm' && <EspumanteAdm />}
                    {vinhoAtual === 'SobremesaAdm' && <SobremesaAdm />}
                    {vinhoAtual === 'FortificadoAdm' && <FortificadoAdm />}

            </main>

        </>
    )
}