import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { QuizzesContext } from "../App";

const Navbar = () => {
	const { editEnabled, setEditEnabled } = useContext(QuizzesContext);
	const toggleEdit = () => {
		// console.log("editEnabled", editEnabled);
		setEditEnabled((prevState) => !prevState);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand cursor-pointer" to="/">
					Quiz Creator
				</Link>
				<div className="d-flex">
					<Link className="btn btn-primary me-2" to="/quiz/add">
						Add New Quiz
					</Link>
					<button className="btn btn-outline-primary" onClick={toggleEdit}>
						{editEnabled ? "Cancel" : "Edit Quiz"}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
