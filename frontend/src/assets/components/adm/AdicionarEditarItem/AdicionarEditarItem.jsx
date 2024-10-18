

export default function AdicionarEditarItem (dadositem) {
    return(
        <>
        <h1 className='titulo-add'>{dadositem.titulo}</h1>
                <div className='content-add'>
                    <button className='add-img'>
                        <i className='bx bx-plus-circle'></i>
                        <p className='adicionar-imagem'>{dadositem.imagem}</p>
                    </button>
                    <form className='form-add'>
                        <div className='linha'>
                            <input type="text" placeholder='Nome do produto' />
                            <input type="text" placeholder='Descrição do produto' />
                            <input type="text" placeholder='Vinificação' />
                            <input type="text" placeholder='Sobre o produtor' />
                            <input type="text" placeholder="Preço" />
                            <p></p>
                        </div>
                        <input type="text" placeholder='Citricos: ' />
                        <input type="text" placeholder='Pais: ' />
                        <input type="text" placeholder='Tamanho da Garrafa: ' />
                        <input type="text" placeholder='Harmonização: ' />
                        <input type="text" placeholder='Região: ' />
                        <input type="text" placeholder='Tipo: ' />
                        <input type="text" placeholder='Produtor: ' />
                        <input type="text" placeholder='Uvas: ' />
                        <input type="text" placeholder='Teor alcoólico: ' />
                        <input type="text" placeholder='Temperatura de serviço: ' />

                        

                    </form>

                    <button className='salvar-info'>Salvar informações</button>

                </div>
        </>
    );
}