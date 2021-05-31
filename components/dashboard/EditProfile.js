import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { createProfile } from "../../actions/profile";

const EditProfile = ({ setAlert, createProfile }) => {
	const [formData, setFormData] = useState({
		bio: "",
		coverImage: "",
	});

	const { bio, coverImage } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		createProfile({ bio, coverImage });
	};

	return (
		<Fragment>
			<h1>Edit your profile</h1>
			<form className="form" onSubmit={onSubmit}>
				<div className="form-group">
					<div className="form-group">
						<input
							type="text"
							placeholder="bio"
							name="bio"
							value={bio}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="file"
							accept=".png, .jpg, .jpeg"
							placeholder="coverImage"
							name="coverImage"
							value={coverImage}
							onChange={onChange}
						/>
					</div>
				</div>
				<input type="submit" className="btn btn-primary" value="Update" />
			</form>
		</Fragment>
	);
};

EditProfile.propTypes = {
	setAlert: PropTypes.func.isRequired,
	createProfile: PropTypes.func.isRequired,
};

export default connect(null,{ setAlert, createProfile })(EditProfile);
