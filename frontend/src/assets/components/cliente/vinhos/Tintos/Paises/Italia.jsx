import { useEffect, useState } from "react"
import ApiProdutos from "../../../../../../api/ApiProdutos";
import ConteudoCard from "../../../Card/ConteudoCard";

export default function Italia() {
    
    const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
    

    
    useEffect(() => {
        ApiProdutos('tinto-italia').then((response) => {
            setProdutos(response.produtos);
        })
    }, []);

    
    console.log(produtos.produtos)

    return (
        <>
            <p className=".regiao">Itália</p>

            <div className="cards">

            {produtos.map((product) => 
                    <ConteudoCard key={product.id} data={product} />
                )}



            </div>
        </>
    )
}

