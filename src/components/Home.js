import React, { useContext } from "react";
import QuizPreview from "./quiz/QuizPreview";

// import { quizzes as data } from "../data";
import { QuizzesContext } from "../App";

const Home = () => {
	const { quizzes } = useContext(QuizzesContext);

	return (
		<>
			<h2 className="display-4 my-5">Quizzes</h2>

			{quizzes.map((quiz) => (
				<QuizPreview quiz={quiz} key={quiz.id} />
			))}
		</>
	);
};

export default Home;
