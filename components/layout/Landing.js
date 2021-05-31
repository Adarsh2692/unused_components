import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import stress from "./stress.png";
import AppBar from "../../ZComponents/AppBar/AppBar"

function Landing() {
	return (
		<Fragment>
			<AppBar />
			<div className="hero-container">
				<div className="content">
					{" "}
					<h1>Welcome to Saorsa</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
						tenetur esse eaque earum, accusantium quos!
					</p>
					<div className="hero-btns">
						<button className="btn" style={{ backgroundColor: "white" }}>
							<Link to="/courses">GET STARTED</Link>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Landing;

/* 
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LOGOUT } from "../../actions/types";
import { logout } from "../../actions/auth";
import AddMood from '../dashboard/AddMood';
import EditProfile from '../dashboard/EditProfile';
import { AppBar } from '@material-ui/core/AppBar';
import AppBar from './../../ZComponents/AppBar/AppBar';

const Landing = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<div>
			<Link to="/addmood"> AddMood </Link>
			<br />
			<Link to="/editprofile"> EditProfile </Link>
			<br/>
			<Link to="/" onClick={logout}> Logout </Link>
		</div>
	);

	const guestLinks = (
		<div>
			<Link to="/register"> Register </Link>
			<br />
			<Link to="/login"> Login </Link>
		</div>
	);

	return (
		<div className="table" style={{ display: "block" }}>
		    <h3>Some Description</h3>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</div>
	);
};

Landing.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Landing);
 */
