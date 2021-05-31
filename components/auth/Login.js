import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import './Auth.css'

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	//Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div
			className="container-fluid"
			style={{
				background: "#09386F",
				width: "100%",
				minHeight: "90vh",
				position: "absolute",
			}}
		>
			<div className="sect">
				<h1 className="large">Sign In</h1>
				<p className="lead">
					<i className="fas fa-user" /> Sign Into Your Account
				</p>
				<form className="form" onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<input type="submit" className="btn btn-primary" value="Login" />
				</form>
				<p className="my">
					Already have an account? <Link to="/register" style={{color:"blue"}}>Sign Up</Link>
				</p>
			</div>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
