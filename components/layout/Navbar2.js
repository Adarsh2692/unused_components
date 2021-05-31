import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { LOGOUT } from "./../../actions/types";
import { logout } from "../../actions/auth";
import "./Navbar.css";

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const authLinks = (
		<ul className={click ? "nav-menu active" : "nav-menu"}>
			<li className="nav-item">
				<Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
			<nav className="navbar2">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
