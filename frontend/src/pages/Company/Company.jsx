
import './index.css'
import ConteudoCompany from "../../assets/components/cliente/Company/ConteudoCompany";
import Provider from '../../context/Provider';

export default function Company() {
    return (
        <>
            <Provider>
                <ConteudoCompany/>

            </Provider>
        </>
    )
}