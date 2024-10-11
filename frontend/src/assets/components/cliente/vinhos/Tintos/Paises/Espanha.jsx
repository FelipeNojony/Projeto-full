import { useState, useEffect } from "react"
import ApiProdutos from "../../../../../../api/ApiProdutos";
import ConteudoCard from "../../../Card/ConteudoCard";


export default function Espanha() {


    const [produtos, setProdutos] = useState([]);
    

    
    useEffect(() => {
        ApiProdutos('tinto-espanha').then((response) => {
            setProdutos(response.produtos);
        })
    }, []);

    
    console.log(produtos)


    return (
        <>
            <p className=".regiao">Espanha</p>


            <div className="cards">
                

            {produtos.map((product) => 
                    <ConteudoCard key={product.id} data={product} />
                )}
                
            </div>
        </>
    )
}

