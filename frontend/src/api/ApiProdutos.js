const ApiProdutos = async (query) => {

    const api = await fetch(`http://localhost:3333/produtos?categoria=${query}`)
    .then((res) => res.json())
    .then((res) => { return res })
    const data = api
    console.log(data)
    return data

};

export default ApiProdutos;
