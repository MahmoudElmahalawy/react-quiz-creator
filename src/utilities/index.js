export function setQuizzesToLS(quizzes) {
	localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

export function getQuizzesFromLS() {
	return JSON.parse(localStorage.getItem("quizzes")) || [];
}

export function getQuizzesFromAPI() {
	return fetch("http://localhost:3005/quizzes");
}
