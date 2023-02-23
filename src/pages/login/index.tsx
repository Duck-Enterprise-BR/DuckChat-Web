import "./style.css"
import logo from "../../imgs/logo.png"
import { useEffect, useState } from "react"

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        if(email && password){
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }

    }, [email, password]);

    function onSubmit(){
        console.log(email)
        console.log(password)
    }

    return (
        <div className="container-body">
            <div className="container-login">
                <div className="container-title">
                    <img
                        src={logo}
                        width="250px"
                    />
                    <h1>DuckChat</h1>
                </div>

                <div className="container-form">
                    <div className="form">
                        <label>Email</label>
                        <input
                            type="email"
                            required={true}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form">
                        <label>Senha</label>
                        <input
                            type="password"
                            required={true}
                            onChange={((event) => setPassword(event.target.value))} 
                        />
                    </div>
                </div>

                <div className="container-options">
                    <div className="option">
                        <button 
                            onClick={() => onSubmit()}
                            disabled={disabledButton}
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;