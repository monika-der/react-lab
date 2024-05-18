import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');

        // function handleChange(event) {
        //     setEmail(event.target.value);
        // }
        //
        // function checkEmail() {
        //     let message;
        //     if (email.length < 10) {
        //         message = "Email jest krótszy niż 10 znaków"
        //     } else if (email.length > 25) {
        //         message = "Email jest za długi"
        //     } else {
        //         message = "Email jest w porządku"
        //         setState(true)
        //     }
        //     alert(message)
        // }

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => props.onLogin(email)}>
            {props.buttonLabel || "Zaloguj"}
        </button>
    </div>;
}