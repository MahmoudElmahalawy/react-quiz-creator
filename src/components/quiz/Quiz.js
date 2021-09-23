import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { quizzes } from "../../data";

import Questions from "./Questions";

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);

	useEffect(() => {
		setQuiz(quizzes.find((quiz) => quiz.id == id));
	}, []);

	return (
		<>
			{quiz && (
				<>
					<h2 className="display-4 my-5">Quiz No. {quiz.id}</h2>
					<h3>{quiz.id}</h3>
					<p>{quiz.title}</p>
					<p>{quiz.created}</p>
					<p>{quiz.description}</p>
					<p>{quiz.modified}</p>
					<p>{quiz.url}</p>
					<p>{quiz.score}</p>
					{quiz.questions_answers.map((qa) => (
						<Questions qa={qa} />
					))}
				</>
			)}
		</>
	);
};

export default Quiz;
