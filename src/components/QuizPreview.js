import React from "react";

const QuizPreview = () => {
	return (
		<div className="card">
			<div className="card-header">Quiz No. {"id"}</div>
			<div className="card-body">
				<h5 className="card-title">{"Quiz Title"}</h5>
				<p className="card-text ps-3">
					{"Quiz Description"} With supporting text below as a natural lead-in to additional content.
				</p>

				<div className="d-flex justify-content-center">
					<iframe
						className="mx-auto"
						src={"https://www.youtube.com/watch?v=e6EGQFJLl04".replace("/watch?v=", "/embed/")}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<span className="badge rounded-pill bg-secondary float-end">Final Score: {10}</span>
			</div>
		</div>
	);
};

export default QuizPreview;
