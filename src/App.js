import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('monika@gmail.com');
    const [state, setState] = useState(false);

    let content;
    if (!state) {
        content = <div>
            Zaloguj się e-mailem
                <input type="text" onChange={handleChange} />
                <button type="button" onClick={() => setState(true)}>
                    Wchodzę
                </button>
        </div>
    } else {
        content = <div>
            <h1>Twój e-mail to {email}</h1>
        </div>
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <h1>Witaj w systemie zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
