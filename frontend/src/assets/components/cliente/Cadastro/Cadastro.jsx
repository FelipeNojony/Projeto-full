import { useForm } from 'react-hook-form'

import './index.css'


const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    backgroundColor: 'rgb(0,0,0, 0.9)'

}

export default function Cadastro({ isOpen }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    function onSubmit(data) {
        console.log(data);
    }


    if (isOpen) {
        return (
            <>
                <div style={BACKGROUND_STYLE}>
                    <main id="container-formulario-cliente">
                        <div className="content-formulario-cliente">
                            <div className="container-campos">
                                <form className="campos">
                                    <div className="dados-pessoais">
                                        <h3>Dados Pessoais <i className='bx bx-chevron-down'></i></h3>
                                        <div className="input-formulario">
                                            <input type='text' placeholder="Nome Completo" {...register("nome", { required: true })}/>
                                            <div>
                                            {errors.nome && <span>O campo nome é obrigatório</span>}
                                            </div>
                                        </div>

                                        <div className="input-formulario">
                                            <input type="email" placeholder="Endereço de email" {...register("email", { required: true })} />
                                            <div>
                                            {errors.email && <span>O campo email é obrigatório</span>}
                                            </div>
                                        </div>

                                        <div className="input-formulario">
                                            <input type="password" placeholder="Senha" {...register("senha", { required: true })} />
                                            <div>
                                            {errors.senha && <span>O campo senha é obrigatório</span>}
                                            </div>
                                        </div>

                                        <div className="input-formulario">
                                            <input type="password" placeholder="Confirmar senha"  {...register("confirmarsenha", { required: true })} />
                                            <div>
                                            {errors.confirmarsenha && <span>O campo confirmar senha é obrigatório</span>}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="contato">
                                        <h3>Contato <i className='bx bx-chevron-down'></i></h3>
                                        <div className="input-formulario">
                                            <input type="tel" placeholder="Telefone" {...register("telefone", { required: true })} />
                                            <div>
                                            {errors.telefone && <span>O campo telefone é obrigatório</span>}
                                            </div>
                                        </div>

                                        <div className="input-formulario">
                                            <input type="tel" placeholder="Celular" {...register("celular", { required: true })} />
                                            <div>
                                            {errors.celular && <span>O campo celular é obrigatório</span>}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="endereco">
                                        <h3>Endereço <i className='bx bx-chevron-down'></i></h3>
                                        <div className="input-formulario">
                                            <input type="text" placeholder="CEP" {...register("cep", { required: true })} />
                                            <div>
                                            {errors.cep && <span>O campo cep é obrigatório</span>}
                                            </div>
                                        </div>

                                        <div className="input-formulario">
                                            <input type="text" placeholder="Logradouro" name="logradouro" id="logradouro" />
                                        </div>

                                        <div className="num">
                                            <div className="input-formulario">
                                                <input type="text" placeholder="Numero" name="numero" id="numero" />
                                            </div>

                                            <div className="input-formulario">
                                                <input type="text" placeholder="Complemento" name="complemento" id="complemento" />
                                            </div>
                                        </div>
                                        <div className="input-formulario">
                                            <input type="text" placeholder="Bairro" name="bairro" id="bairro" />
                                        </div>

                                        <div className="city">
                                            <div className="input-formulario">
                                                <input type="text" placeholder="Cidade" name="cidade" id="cidade" />
                                            </div>

                                            <div className="input-formulario">
                                                <input type="text" placeholder="Estado" name="estado" id="estado" />
                                            </div>

                                            <div className="input-formulario">
                                                <input type="text" placeholder="Pais" name="pais" id="pais" />
                                            </div>
                                        </div>
                                    </div>



                                </form>
                                <div>
                                    <button id="salvar-alteracoes-btn" onClick={() => handleSubmit(onSubmit)()}>Salvar Alterações</button>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>

            </>

        )
    }
    return null
}