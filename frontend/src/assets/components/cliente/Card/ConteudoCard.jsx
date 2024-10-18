import { useContext } from 'react'
import LandingPage from "../../../../pages/LandingPage/LandingPage";


import './index.css'

import propTypes from 'prop-types';
import AppContext from '../../../../context/Appcontext';






export default function ConteudoCard({ data }) {
    const { name, image, price } = data;



    const { produtos, setProdutos, openLanding, setOpenLanding, openInfo, setOpenInfo } = useContext(AppContext)


    const adicionarNoCarrinho = () => setProdutos([...produtos, data]);

    

    const infoLAnding = () => {
        setOpenLanding(true)
        
        setOpenInfo([...openInfo, data]);
    }

    return (
        <>
            <div className="card">

                <img src={image} alt="" />



                <p className="name">{name} </p>

                <div>

                    <p className="value" >{price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                    })} </p>

                    <button type="button"
                        className="btn-comprar"
                        onClick={adicionarNoCarrinho}>Comprar</button>

                </div>



                <button type='button' className='btn-landing' onClick={infoLAnding}>
                    <i title="Informações" className='bx bx-info-circle'></i>
                </button>



            </div>


            {openInfo.map((itemlanding) => (
                <LandingPage isOpen={openLanding} key={itemlanding.id} data={itemlanding}/>
            ))}

        </>
    )
};

ConteudoCard.propTypes = {
    props: propTypes.shape({}),
}.isRequired;

