

import './index.css'
import Provider from '../../context/Provider';
import ConteudoHome from '../../assets/components/cliente/Home/ConteudoHome';

export default function Home() {



    return (
        <>
            <Provider>
                <ConteudoHome />

            </Provider>


        </>
    )
}