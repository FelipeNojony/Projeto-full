import ConteudoCard from "../../assets/components/cliente/Card/ConteudoCard";
import Provider from "../../context/Provider";


export default function Card() {
  return (
    <>
        <Provider>
          <ConteudoCard />

        </Provider>
        

    </>
  );
}

