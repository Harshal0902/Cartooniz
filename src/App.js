import React from 'react'
import Login from "./pages/Login/Components/Login"
import SignUp from "./pages/Login/Components/SignUp"
import AdultQuiz from "./pages/quiz/adultQuiz"
import KidsQuiz from "./pages/quiz/kidsQuiz"
import FunZone from "./pages/funZone/funZone"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"

export default function App() {
	return (
		<div>
			<Router>
				<Route exact path="/">
					<SignUp />
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
			</Router>
			
		</div>
	)
}
