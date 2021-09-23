import React from "react";
import { Link } from "react-router-dom";

const QuizPreview = ({ quiz }) => {
	return (
		<div className="card my-3">
			<div className="card-header d-flex justify-content-between">
				<span className="align-self-center">Quiz No. {quiz.id}</span>
				<Link className="btn btn-outline-secondary" to={`/quiz/${quiz.id}`}>
					Go To Quiz
				</Link>
			</div>
			<div className="card-body">
				<h5 className="card-title">{quiz.title}</h5>
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
				<span className={`badge rounded-pill ${quiz.score > 0 ? "bg-secondary" : "bg-danger"} float-end my-2`}>
					{quiz.score ? `Final Score: ${quiz.score}` : "No Score"}
				</span>
			</div>
		</div>
	);
};

export default QuizPreview;
