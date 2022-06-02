export default function Card(props) {

    const passarDados = (pr) =>{
        props.action(pr);
    }

    return (
        <div className="conteudo">
            <h2>Cards</h2>

        <div className="cards">
                {props.data.map((itens,ix)=>(
                    <div key={ix} onClick={() => passarDados(itens)}>
                        <p>{
                            itens.cardname.substring(0,4) === "Visa" ? 
                                <img src="../img/cardvisa.png" />:
                                <img src="../img/cardmaster.png" />   
                        }</p>
                        <h3>{itens.cardname}</h3>
                    </div>
                ))}
        </div>
        </div>
    
    );
}