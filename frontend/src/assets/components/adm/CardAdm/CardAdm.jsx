import { Link } from "react-router-dom";

import './index.css'

export default function CardAdm(props) {
    return (
        <>
            <div className="card">

                <img src={props.image} alt={props.alternative} />

                <p className="name">{props.name} </p>

                <div>

                    <button className="btn-editar"> <Link className="editar" to={"/editarItem"}>Editar</Link> </button>
                    
                    <button className="btn-excluir">Excluir </button>
                    
                </div>
            </div>
        </>
    )
}