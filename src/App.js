import './App.css';

function App() {
    let email = 'monika@gmail.com';

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email.toUpperCase()}</h2>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default App;
