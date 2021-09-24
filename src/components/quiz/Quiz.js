import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Question from "./Question";

// import { quizzes } from "../../data";
import { QuizzesContext } from "../../App";

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);
	const [answers, setAnswers] = useState([]);
	const [quizNotFinished, setQuizNotFinished] = useState(null);
	const [showFeedback, setShowFeedback] = useState(null);

	const { quizzes } = useContext(QuizzesContext);

	useEffect(() => {
		setQuiz(quizzes.find((quiz) => quiz.id === +id));
	}, [quizzes, id]);

	const checkQuizFinished = () => {
		console.log(answers);
		if (answers.length !== quiz.questions_answers.length) {
			return setQuizNotFinished(true);
		}
		setQuizNotFinished(false);
		setShowFeedback(true);
	};

	return (
		<>
			{quiz ? (
				<>
					<h2 className="display-4 my-5">Quiz No. {quiz.id}</h2>
					<div className="card my-3">
						<div className="card-body">
							<span
								className={`badge rounded-pill ${
									quiz.score > 0 ? "bg-secondary" : "bg-danger"
								} float-end my-2`}
							>
								{quiz.score ? `Your Score: ${quiz.score}` : "No Score"}
							</span>
							<h5 className="card-title mb-4">{quiz.title}</h5>
							<p className="card-text ps-3">{quiz.description}</p>

							<div className="d-flex justify-content-center">
								<iframe
									src={quiz.url.replace("/watch?v=", "/embed/")}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<hr className="hr-sm" />
							{quiz.questions_answers.map((qa) => (
								<Question
									qa={qa}
									answers={answers}
									setAnswers={setAnswers}
									showFeedback={showFeedback}
									key={qa.id}
								/>
							))}
							{quizNotFinished && (
								<div className="alert alert-danger w-fit rounded-3 py-2 px-3 mx-auto mt-3">
									Please finish answering
								</div>
							)}
							<button
								className="btn btn-primary d-block mx-auto mt-5"
								onClick={() => checkQuizFinished()}
							>
								Submit Answers
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="my-5 text-center">
					<p className="h5">No quiz with this id was found</p>
					<Link className="btn btn-outline-secondary my-3" to="/">
						Go Back
					</Link>
				</div>
			)}
		</>
	);
};

export default Quiz;
