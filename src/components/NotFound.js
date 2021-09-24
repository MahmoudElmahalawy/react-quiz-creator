import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="my-5 text-center">
			<p className="h5">This page does not exist</p>
			<Link className="btn btn-outline-secondary my-3" to="/">
				Go Back
			</Link>
		</div>
	);
};

export default NotFound;
