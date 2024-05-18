import './App.css';
import "milligram";
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(false);

    let content;
    if (!state) {
        content = <div>
            <h1>Zaloguj się e-mailem
                <input type="text" onChange={handleChange} />
                <button type="button" onClick={checkEmail}>
                    Wchodzę
                </button>
            </h1>
        </div>
    } else {
        content = <div>
            <h1>Twój e-mail to {email}</h1>
        </div>
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function checkEmail() {
        let message;
        if (email.length < 10) {
            message = "Email jest krótszy niż 10 znaków"
        } else if (email.length > 25) {
            message = "Email jest za długi"
        } else {
            message = "Email jest w porządku"
            setState(true)
        }
        alert(message)
    }

    return (
        <div>
            <h1>Witaj w systemie zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
