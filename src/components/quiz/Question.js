import React from "react";

const Question = ({ qa: question }) => {
	return (
		<div className="w-75 mx-auto mt-5">
			<p className="h6">{question.text}</p>

			<div className="w-fit mx-auto">
				{question.answers.map((answer) => (
					<div className="form-check text-center my-2" key={answer.id}>
						<label className="form-check-label" htmlFor={`answer${answer.id}`}>
							{answer.text}
						</label>
						<input
							className="form-check-input"
							type="radio"
							name={`question${question.id}`}
							id={`answer${answer.id}`}
							value={answer.text}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Question;
