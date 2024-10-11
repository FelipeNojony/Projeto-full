import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog';
import Company from './pages/Company/Company';

import Identificacao from './pages/Identificacao/Identificacao';
import LoginCliente from './pages/LoginCliente/LoginCliente';
import LoginAdm from './pages/LoginAdm/LoginAdm';

import LandingPage from './pages/LandingPage/LandingPage';

import Pedidos from './pages/Pedidos/Pedidos';



import AdicionarItem from './pages/AdicionarItem/AdicionarItem';
import EditarItem from './pages/EditarItem/EditarItem';



import PainelClientes from './pages/PainelClientes/PainelClientes';
import HomeAdm from './pages/HomeAdm/HomeAdm';
import CadastroAdmn from './pages/CadastroAdmn/CadastroAdmn';
import CadastroProdutos from './pages/CadastroProdutos/CadastroProdutos';

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>

    <Routes>

    <Route path="" element={ <Home />} />

      <Route path="/homeAdm" element={ <HomeAdm />} />

      <Route path="/home" element={ <Home />} />
      <Route path="/blog" element={ <Blog />} />
      <Route path="/company" element={ <Company />} />


      <Route path='/identificacao' element={ <Identificacao />} />
      <Route path='/logincliente' element={ <LoginCliente />} />
      <Route path='/loginAdm' element={ <LoginAdm />} />



      <Route path='/landingpage' element={<LandingPage />} />


      


      <Route path="/pedidos" element={ <Pedidos />} />

      <Route path="/cadastroProdutos" element={ <CadastroProdutos />} />
      <Route path="/adicionarItem" element={ <AdicionarItem />} />
      <Route path="/editarItem" element={ <EditarItem />} />

      <Route path="/cadastroAdmn" element={ <CadastroAdmn />} />

      <Route path="/painelclientes" element={ <PainelClientes /> } />



    </Routes>

  </BrowserRouter>

  </StrictMode>,
)
