import React from "react";
import QuizPreview from "./quiz/QuizPreview";

import { quizzes as data } from "../data";

const Home = () => {
	return (
		<>
			<h2 className="display-4 my-5">Quizzes</h2>

			{data.map((quiz) => (
				<QuizPreview quiz={quiz} key={quiz.id} />
			))}
		</>
	);
};

export default Home;
