import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="box">
        <h1>Welcome to <span className="title">Cartooniz</span></h1>

        <p className="description">Cartooniz is a simple quiz, where the user needs to guess the character of any cartoon with some clues provided. If user guesses the correct answer, we will show some facts and an AR model of the character.</p><br/>

        <a href="/quiz"><button>Get Started</button></a><br/>
        <button>About</button>
      </div>
    </div>
  );
}

export default App;
