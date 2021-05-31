import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LOGOUT } from "./../../actions/types";
import { logout } from "../../actions/auth";
import "./Navbar.css";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
	const [click, setClick] = useState(false);
	const [myColor, setMyColor] = useState("#09386F");

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const authLinks = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			<li className="nav-item">
				<Link
					to="/"
					className="nav-links"
					onClick={() => {
						closeMobileMenu();
					}}
				>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
					Profile
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
					Display All Courses
				</Link>
			</li>
			{/* <li className="nav-item">
				<Link to="/editprofile" className="nav-links" onClick={closeMobileMenu}>
					Edit Profile
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/addmood" className="nav-links" onClick={closeMobileMenu}>
					Add Mood
				</Link>
			</li> */}
			{/* <li className="nav-item">
				<a onClick={logout} href="/">
					<i className="fas fa-sign-out-alt" />
					{""}
					<span className="hide-sm"> Logout </span>
				</a>
			</li> */}
			<li className="nav-item">
				<Link to="/courses" className="nav-links" onClick={logout}>
					<i className="fas fa-sign-out-alt" />
					Logout
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			<li className="nav-item">
				<Link to="/" className="nav-links" onClick={closeMobileMenu}>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
					Display All Courses
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/register" className="nav-links" onClick={closeMobileMenu}>
					Register
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/login" className="nav-links" onClick={closeMobileMenu}>
					Login
				</Link>
			</li>
		</ul>
	);

	return (
		<>
			<nav
				className="navbar"
				style={{ position: "sticky", background: myColor }}
			>
				<div className="navbar-container">
					<Link
						to="/"
						className="navbar-logo"
						onClick={() => {closeMobileMenu();}}
					>
						LOGO
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					{!loading && (
						<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
					)}
				</div>
			</nav>
		</>
	);
}

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

/* import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LOGOUT } from "./../../actions/types";
import { logout } from "../../actions/auth";
import { Button } from './Button';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/"> Home </Link>
			</li>
			<li>
				<Link to="/dashboard"> Dashboard </Link>
			</li>
			<li>
				<a onClick={logout} href="/">
					<i className="fas fa-sign-out-alt" />
					{""}
					<span className="hide-sm"> Logout </span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/"> Home </Link>
			</li>
			<li>
				<Link to="/register"> Register </Link>
			</li>
			<li>
				<Link to="/login"> Login </Link>
			</li>
		</ul>
	);

	return (
		<nav className="table" style={{ display: "block" }}>
			<h1>
				<Link to="/"> Saorsa Wellbeing</Link>
			</h1>
			<ul>
				{!loading && (
					<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
				)}
				<li>
					<Link to="/courses"> Display courses</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
 */
