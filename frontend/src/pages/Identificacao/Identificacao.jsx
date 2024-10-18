import './index.css';
import { Link } from 'react-router-dom';



export default function Identificacao() {
    return (
        <>
            <main className='container-identificacao sem-barra'>
                <div className='content-identificacao'>
                    <h1>Wine Experience</h1>
                    <span>Identifique-se</span>

                    <Link to={"/logincliente"}><button className='cliente'>Cliente</button></Link>
                    <Link to={"/loginadm"}><button className='administrador'>Administrador</button></Link>

                </div>

            </main>
        </>

    );
}