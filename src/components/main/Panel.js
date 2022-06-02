export default function Panel(props){
    var caminho = "./img/holdingmaster.png";

    if (props.data.cardname == "") {
        caminho = "./img/holdingvisa.jpg";

    } else if (props.data.cardname == "MasterCard Platinum") {
        caminho = "./img/holdingmaster.png";

    } else {
        caminho = "./img/holdingvisa.jpg";
    }
    return(
        <div className="panel">
            <img src={caminho} />
            {console.log(caminho)}
        </div>
    );
}
