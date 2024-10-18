import { useEffect, useState } from "react"
import ApiProdutos from "../../../../../../api/ApiProdutos";
import ConteudoCard from "../../../Card/ConteudoCard";

export default function Alemanha() {
    const [produtos, setProdutos] = useState([]);


    useEffect(() => {
        ApiProdutos('branco-alemanha').then((response) => {
            setProdutos(response.produtos);
        })
    }, []);


    console.log(produtos.produtos)

    return (
        <>
            <p className=".regiao">Alemanha</p>

            <div className="cards">
                {produtos.map((product) =>
                    <ConteudoCard key={product.id} data={product} />
                )}


            </div>

        </>
    )
}

