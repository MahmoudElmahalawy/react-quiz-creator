import React, { useState } from "react";

const AddQuiz = () => {
	const [qaArr, setQandAArr] = useState([{ questionNo: 1, answers: [1, 2] }]);

	const QuestionInput = ({ questionIndex }) => (
		<div>
			<div className="mb-2">
				<label htmlFor={`question${questionIndex}Input`} className="form-label">
					Question {questionIndex}
				</label>
				<textarea
					className="form-control"
					name="description"
					id={`question${questionIndex}Input`}
					rows="2"
				></textarea>
			</div>
			<div className="row question-feedback">
				<div className="col-lg-6 mb-2">
					<label htmlFor={`question${questionIndex}FeedbackTrueInput`} className="form-label">
						Feedback for <span className="text-success">correct</span> answer
					</label>
					<textarea
						className="form-control"
						name="description"
						id={`question${questionIndex}FeedbackTrueInput`}
						rows="2"
					></textarea>
				</div>
				<div className="col-lg-6 mb-2">
					<label htmlFor={`question${questionIndex}FeedbackFalseInput`} className="form-label">
						Feedback for <span className="text-danger">incorrect</span> answer
					</label>
					<textarea
						className="form-control"
						name="description"
						id={`question${questionIndex}FeedbackFalseInput`}
						rows="2"
					></textarea>
				</div>
			</div>
		</div>
	);

	const ChoiceInput = ({ questionNo, answerNo }) => (
		<div className="mb-2">
			<label htmlFor={`question${questionNo}Choice${answerNo}Input`} className="form-label">
				Choice
			</label>
			<input
				type="text"
				className="form-control"
				name="description"
				id={`question${questionNo}Choice${answerNo}Input`}
			></input>
		</div>
	);

	const QuestionsAndAnswers = () => {
		return qaArr.map((qa) => (
			<div className="mt-5" key={qa.questionNo}>
				<QuestionInput questionIndex={qa.questionNo} />
				{qa.answers.map((a) => (
					<ChoiceInput questionNo={qa.questionNo} answerNo={a} key={a} />
				))}
				<button className="btn btn-sm btn-outline-danger" onClick={() => addChoice(qa.questionNo)}>
					Add Choice
				</button>
			</div>
		));
	};

	const addQuestion = () => {
		setQandAArr((prevState) => [...prevState, { questionNo: prevState.length + 1, answers: [1, 2] }]);
	};

	const addChoice = (questionNo) => {
		let qIndex = qaArr.findIndex((qa) => qa.questionNo === questionNo);
		let qaCopy = JSON.parse(JSON.stringify(qaArr));

		qaCopy[qIndex]["answers"].push(qaCopy[qIndex]["answers"].length + 1);

		setQandAArr([...qaCopy]);
	};

	return (
		<>
			<h2 className="display-4 my-5">Create Quiz</h2>

			<div className="mb-3">
				<label htmlFor="quizTitleInput" className="form-label">
					Quiz Title
				</label>
				<input
					type="text"
					className="form-control"
					name="title"
					id="quizTitleInput"
					placeholder="Ex. Math Quiz"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="quizDescriptionInput" className="form-label">
					Quiz Description
				</label>
				<textarea className="form-control" name="description" id="quizDescriptionInput" rows="3"></textarea>
			</div>
			<div className="mb-3">
				<label htmlFor="videoURLInput" className="form-label">
					Youtube Video URL
				</label>
				<input type="text" className="form-control" name="url" id="videoURLInput" />
			</div>

			{/* <hr className="hr-sm" /> */}

			<h2 className="display-6 mt-2 mb-3 text-muted">Questions and Answers</h2>

			<QuestionsAndAnswers />
			<button className="btn btn-primary d-block mx-auto my-3" onClick={addQuestion}>
				Add Question
			</button>
		</>
	);
};

export default AddQuiz;
