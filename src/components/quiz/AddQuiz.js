import React, { useState } from "react";

const AddQuiz = () => {
	const [qaArr, setQandAArr] = useState([{ questionNo: 1, answers: [1, 2] }]);
	const [quizMetadata, setQuizMetadata] = useState({
		id: null,
		title: "",
		description: "",
		url: "",
		score: null,
		created: "",
		modified: "",
	});

	const QuestionInput = ({ questionIndex }) => {
		const [qaDataArr, setQandADataArr] = useState([
			{
				answer_id: null,
				feedback_false: "",
				feedback_true: "",
				id: questionIndex,
				text: "",
			},
		]);
		// const [qaData, setQandAData] = useState();
		const handleQandADataArr = (e) => {
			setQandADataArr((prevState) =>
				prevState.map((qa) => (qa.id === questionIndex ? { ...qa, [e.target.name]: e.target.value } : qa))
			);
		};

		return (
			<div>
				<pre>{JSON.stringify(qaDataArr)}</pre>
				<button onClick={() => console.log(qaDataArr)}>Log</button>
				<div className="mb-2">
					<label htmlFor={`question${questionIndex}Input`} className="form-label">
						Question {questionIndex}
					</label>
					<textarea
						className="form-control"
						name="text"
						id={`question${questionIndex}Input`}
						rows="2"
						onChange={(e) => {
							handleQandADataArr(e);
						}}
					></textarea>
				</div>
				<div className="row question-feedback">
					<div className="col-lg-6 mb-2">
						<label htmlFor={`question${questionIndex}FeedbackTrueInput`} className="form-label">
							Feedback for <span className="text-success">correct</span> answer
						</label>
						<textarea
							className="form-control"
							name="feedback_true"
							id={`question${questionIndex}FeedbackTrueInput`}
							rows="2"
							onChange={(e) => {
								handleQandADataArr(e);
							}}
						></textarea>
					</div>
					<div className="col-lg-6 mb-2">
						<label htmlFor={`question${questionIndex}FeedbackFalseInput`} className="form-label">
							Feedback for <span className="text-danger">incorrect</span> answer
						</label>
						<textarea
							className="form-control"
							name="feedback_false"
							id={`question${questionIndex}FeedbackFalseInput`}
							rows="2"
							onChange={(e) => {
								handleQandADataArr(e);
							}}
						></textarea>
					</div>
				</div>
			</div>
		);
	};

	const ChoiceInput = ({ questionNo, answerNo }) => {
		const [answersArr, setAnswersArr] = useState([
			{
				id: answerNo,
				is_true: false,
				text: "",
			},
		]);

		const handleAnswersArr = (e) => {
			setAnswersArr((prevState) =>
				prevState.map((a) => (a.id === answerNo ? { ...a, [e.target.name]: e.target.value } : a))
			);
		};

		return (
			<div className="mb-2">
				<pre>Answers Array: {JSON.stringify(answersArr)}</pre>
				<label htmlFor={`question${questionNo}Choice${answerNo}Input`} className="form-label">
					Choice
				</label>
				<input
					type="text"
					className="form-control"
					name="text"
					id={`question${questionNo}Choice${answerNo}Input`}
					onChange={(e) => handleAnswersArr(e)}
				></input>
			</div>
		);
	};

	const QuestionsAndAnswers = () => {
		return qaArr.map((qa) => (
			<div className="mt-5" key={qa.questionNo}>
				<QuestionInput questionIndex={qa.questionNo} />
				{qa.answers.map((a) => (
					<ChoiceInput questionNo={qa.questionNo} answerNo={a} key={a} />
				))}
				<button className="btn btn-sm btn-outline-danger" onClick={() => addChoice(qa.questionNo)}>
					Add Choice &#65291;
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

	const handleQuizMetaData = (e) => {
		setQuizMetadata((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const createQuiz = () => {};

	return (
		<>
			<h2 className="display-4 my-5">Create Quiz</h2>
			<button onClick={() => console.log(quizMetadata)}>Log quizMetadata</button>
			<button onClick={() => {}}>Log qaData</button>
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
					onChange={(e) => handleQuizMetaData(e)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="quizDescriptionInput" className="form-label">
					Quiz Description
				</label>
				<textarea
					className="form-control"
					name="description"
					id="quizDescriptionInput"
					rows="3"
					onChange={(e) => handleQuizMetaData(e)}
				></textarea>
			</div>
			<div className="mb-3">
				<label htmlFor="videoURLInput" className="form-label">
					Youtube Video URL
				</label>
				<input
					type="text"
					className="form-control"
					name="url"
					id="videoURLInput"
					onChange={(e) => handleQuizMetaData(e)}
				/>
			</div>

			{/* <hr className="hr-sm" /> */}

			<h2 className="display-6 mt-2 mb-3 text-muted">Questions and Answers</h2>

			<QuestionsAndAnswers />
			<button className="btn btn-outline-primary d-block my-3 mx-auto" onClick={addQuestion}>
				Add Question &#65291;
			</button>
			<button className="btn btn-lg btn-primary d-block mx-auto my-3" onClick={createQuiz}>
				Create Quiz
			</button>
		</>
	);
};

export default AddQuiz;
