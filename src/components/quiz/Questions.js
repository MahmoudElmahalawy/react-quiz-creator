import React from "react";

const Questions = ({ qa }) => {
	return (
		<div>
			<p>{qa.id}</p>
			<p>{qa.text}</p>
		</div>
	);
};

export default Questions;
