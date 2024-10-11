import { useState } from "react"
import CadastroAdm from "../CadastroAdm/Cadastroadm"
import { Link } from "react-router-dom"


export default function LoginAdm(dadosLogin) {
    const [openCadastroAdm, setOpenCadastroAdm] = useState(false)

    

    return (
        <div className='content-logincliente'>

            <div>
                <h1 className='titulo-cliente'>{dadosLogin.titulo}</h1>
            </div>

            <div className='imput-box'>
                <div className='box-login'>
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login-cliente" id="login-cliente" placeholder='Digite seu email aqui'></input>
                </div>

                <div className='box-senha'>
                    <label htmlFor="senha">Senha</label>
                    <input type="text" name="senha-cliente" id="senha-cliente" placeholder='Digite sua senha aqui'></input>
                </div>
            </div>


            <div className='perdeu-senha'>
                <button type="button" id='perdeu-senha'>Esqueceu a senha?</button>
            </div>

            <div className='acessar'>
            <Link to={"/homeAdm"}><button type="button" id='acessar'> Acessar</button></Link> 
            </div>

            <div className='box-cadastro'>
                <div className='sem-conta'>
                    <p>Não possui conta?</p>
                </div>
                <div className='signup'>
                    <button type="button" id='cadastre-se' onClick={() => setOpenCadastroAdm(true)}>Cadastre-se</button>
                </div>
                <div>
                <CadastroAdm isOpen={openCadastroAdm} />

                </div>
            </div>

        </div>
    )
}