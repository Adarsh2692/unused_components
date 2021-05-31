import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return (
		<div
			style={{
				background: "#09386F",
				width: "100%",
				minHeight: "90vh",
			}}
		>
			{loading && profile === null ? (
				<div>Loading...</div>
			) : (
				<Fragment>
					<h1>Profile Page</h1>
					<p style={{ fontSize: "35px", color: "white" }}>
						Welcome {user && user.name}
					</p>
					<br />
					{profile !== null ? (
						<Fragment>
							{profile.bio !== null ? (
								<Fragment>
									<p style={{ fontSize: "25px", color: "white" }}>
										Bio:{profile.bio}
									</p>
									<div>
										<img src={profile.coverImage} class="image" />
									</div>
									<br />
								</Fragment>
							) : (
								<Fragment>
									<p style={{ fontSize: "25px", color: "white" }}>Bio:___</p>
									<br />
								</Fragment>
							)}
						</Fragment>
					) : (
						<Fragment>
							<p style={{ fontSize: "25px", color: "white" }}>Bio:___</p>
							<br />
						</Fragment>
					)}
					{profile !== null ? (
						<Fragment>
							<p style={{ fontSize: "25px", color: "white" }}>Has Profile</p>
							<div>
								<p style={{ fontSize: "25px", color: "white" }}>
									Profile Id:{profile && profile._id}
								</p>
								<div>
									<p style={{ fontSize: "25px", color: "white" }}>Moods</p>
									<div style={{ width: "200px" }}>
										{profile.moodArray.map((moods, i) => {
											return (
												<div
													key={i}
													style={{
														border: "solid",
														width: "200px",
														margin: "10px",
														listStyleType: "none",
													}}
												>
													<li
														style={{
															margin: "10px",
															fontSize: "15px",
															color: "white",
														}}
													>
														{moods.mood}
													</li>
													<br />
													<li
														style={{
															margin: "10px",
															fontSize: "15px",
															color: "white",
														}}
													>
														{moods.rating}
													</li>
													<br />
													<li
														style={{
															margin: "10px",
															fontSize: "15px",
															color: "white",
														}}
													>
														{moods.moodImage}
													</li>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						<Fragment>You have not set a profile</Fragment>
					)}
				</Fragment>
			)}
		</div>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

/*
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return loading && profile === null ? (
		<div>Loading...</div>
	) : (
		<Fragment>
			<h1>Profile Page</h1>
			Welcome {user && user.name}
			<br />
			{profile !== null ? (
				<Fragment>
					{profile.bio !== null ? (
						<Fragment>
							Bio:{profile.bio}
							<br />
						</Fragment>
					) : (
						<Fragment>
							Bio:___
							<br />
						</Fragment>
					)}
				</Fragment>
			) : (
				<Fragment>
					Bio:___
					<br />
				</Fragment>
			)}
			{profile !== null ? (
				<Fragment>
					Has profile
					<div>
						{profile && profile._id}
						<div>
							Moods
							<div style={{ width: "200px" }}>
								{profile.moodArray.map((moods, i) => {
									return (
										<div key={i} style={{ border: "solid", width: "200px", margin:"10px" }}>
											<li style={{margin:"10px" }}>{moods.mood}</li>
											<br />
											<li style={{margin:"10px" }}>{moods.rating}</li>
											<br />
											<li style={{margin:"10px" }}>{moods.moodImage}</li>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				<Fragment>You have not set a profile</Fragment>
			)}
		</Fragment>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

*/
