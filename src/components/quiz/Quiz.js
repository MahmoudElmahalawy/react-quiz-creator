import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Question from "./Question";

import { quizzes } from "../../data";

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);

	useEffect(() => {
		setQuiz(quizzes.find((quiz) => quiz.id === +id));
	}, [id]);

	return (
		<>
			{quiz && (
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
							{quiz.questions_answers.map((qa) => (
								<Question qa={qa} key={qa.id} />
							))}
							<button className="btn btn-primary d-block mx-auto mt-5">Submit Answers</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Quiz;
