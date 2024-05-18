import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('monika@gmail.com');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 10) {
        message = <div>Email jest krótszy niż 5 znaków</div>
    } else if (email.length < 15) {
        message = <div>Email jest w sam raz</div>
    } else {
        message = <div>Email jest za długi</div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" onChange={handleChange} />
            {message}
        </div>
    );
}

export default App;
