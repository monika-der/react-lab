import './App.css';
import "milligram";
import LoginForm from "./LoginForm";
import {useState} from "react";

function App() {
    const [authUser, setAuthUser] = useState('');

    function logOut() {
        setAuthUser('');
    }

    let content;
    if (authUser) {
        content = <div>
            <h1>Twój e-mail to {authUser}</h1>
            <button onClick={(logOut) => setAuthUser('')}>Wyloguj</button>
        </div>
    } else {
        content = <div>
            <LoginForm
                onLogin={(email) => setAuthUser(email)}
                buttonLabel=""/>
        </div>;
    }

    return (
        <div>
            <h1>Witaj w systemie zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
