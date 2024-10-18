import { useState } from "react";
import AppContext from "./Appcontext";
import propTypes from 'prop-types'


export default function Provider({ children }) {
  const [ produtos, setProdutos ] = useState([]);
  const [ carrinhoVisivel, setCarrinhoVisivel ] = useState(false)
  const [ pedidosVisivel, setPedidosVisivel ] = useState(false)
  const [ openLanding, setOpenLanding ] = useState(false)
  const [ openInfo, setOpenInfo ] = useState([])
  const [ pedidos, setPedidos ] = useState([])
  
  const value = {
    produtos,
    setProdutos,
    carrinhoVisivel, 
    setCarrinhoVisivel,
    openLanding,
    setOpenLanding,
    pedidosVisivel,
    setPedidosVisivel,
    openInfo,
    setOpenInfo,
    pedidos,
    setPedidos
    
    
    
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}

Provider.propTypes = {
  children: propTypes.any
}.isRequired;