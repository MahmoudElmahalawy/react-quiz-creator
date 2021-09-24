import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quiz from "./components/quiz/Quiz";
import AddQuiz from "./components/quiz/AddQuiz";

import { quizzes as data } from "./data";
import { getQuizzesFromLS, setQuizzesToLS } from "./utilities";

export const QuizzesContext = createContext();

function App() {
	const [quizzes, setQuizzes] = useState(null);

	useEffect(() => {
		if (getQuizzesFromLS().length === 0) {
			setQuizzesToLS(data);
		}
		setQuizzes(getQuizzesFromLS());
	}, []);

	return (
		<>
			{quizzes && (
				<QuizzesContext.Provider value={{ quizzes, setQuizzes, getQuizzesFromLS, setQuizzesToLS }}>
					<Router>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/quiz/:id">
									<Quiz />
								</Route>
								<Route exact path="/quiz/add">
									<AddQuiz />
								</Route>
								<Route exact path="/quiz/:id/edit">
									<EditQuiz />
								</Route>
							</Switch>
						</div>
					</Router>
				</QuizzesContext.Provider>
			)}
		</>
	);
}

export default App;
