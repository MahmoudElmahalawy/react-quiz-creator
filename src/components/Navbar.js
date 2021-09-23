import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand cursor-pointer" to="/">
					Quiz Creator
				</Link>
				<div className="d-flex">
					<button className="btn btn-primary me-2">Add New Quiz</button>
					<button className="btn btn-outline-primary">Edit Quiz</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
