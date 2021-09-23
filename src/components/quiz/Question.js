import React from "react";

const Question = ({ qa: question, answers, setAnswers }) => {
	const recordAnswer = (e) => {
		setAnswers((prevState) => {
			// Check wether to update answer or add a new one
			let questionIndex = prevState.findIndex((question) => !!question[e.target.name]);

			if (prevState.length && questionIndex > -1) {
				// To update answer of previously answered question
				let updatedAnswers = [...prevState];
				updatedAnswers[questionIndex][e.target.name] = e.target.value;
				return [...updatedAnswers];
			} else {
				// To add answer to a new question
				return [...prevState, { [e.target.name]: e.target.value }];
			}
		});
	};

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
							onChange={(e) => recordAnswer(e)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Question;
