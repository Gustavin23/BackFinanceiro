export default function Login(){
    return(
        <div className="login">
            <h2>Login</h2>
            <input type="text" placeholder="User Name" id="username"/> <br/>
            <input type="password" placeholder="Password" id="password"/> <br/>
            <button onClick={() => efetuarLogin()}>Sign In</button>
            <button onClick={() => alert("Cadastrar")}>Sign Out</button>
        </div>
    )
}

function efetuarLogin(){
    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    if(user.value ==="" || user.value === null || pass.value === "" || pass.value === null){
        return alert("Username or password cannot be blank");
    }
    fetch("http://10.26.49.21:5001/api/users/login",{
        method: "POST",
        headers: {
            accept:"application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user:user.value,
            password:pass.value
        })
    }).then((result)=> result.json())
    .then((rs)=>{
        console.log(rs);
        if(rs.token=== "" || rs.token === null){
            return alert("Fail at login");
        }
            else{
                document.getElementsByClassName("login")[0].style.display="none";
            }
    })
    .catch((err) => console.error(`Error Internal -> ${err}`))
}