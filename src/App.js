import React from 'react'
import Login from "./pages/Login/Components/Login"
import SignUp from "./pages/Login/Components/SignUp"
import AdultQuiz from "./pages/quiz/adultQuiz"
import KidsQuiz from "./pages/quiz/kidsQuiz"
import FunZone from "./pages/funZone/funZone"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

function Home() {
  return (
    <div className="App">

      <div className="main">
        <br/>
        
        <h1>Welcome to <span className="title">Cartooniz</span></h1>

        <p className="description">Cartooniz is a simple quiz, where the user needs to guess the character of any cartoon with some clues provided. If user guesses the correct answer, we will show some facts and an AR model of the character.</p><br/>

        <Link to="/adultquiz"><button>Adult Quiz</button></Link><br/>
        <Link to="/kidsquiz"><button>Kids Quiz</button></Link><br/>
        <Link to="/funzone"><button>Fun Zone</button></Link><br/>
        <Link to="/login"><button>Log Out</button></Link><br/>
    
      </div>
    </div>
  );
}

export default function App() {
	return (
		<div>

			<Router>
                        <Link to="/"><button>Back</button></Link><br />
				<Route exact path="/">
					<Home />
				</Route>
    
				<Route path="/login">
					<Login />
				</Route>
    
				<Route path="/adultquiz">
					<AdultQuiz />
				</Route>
    
				<Route path="/kidsquiz">
					<KidsQuiz />
				</Route>

				<Route path="/funzone">
					<FunZone />
				</Route>
    
			</Router>
			
		</div>
	)
}

