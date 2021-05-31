import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { displayCourses } from "../../actions/courses";
import MoodCard from "./MoodCard";
import "./MoodCard.css";
import Popup from "./Popup";
import { addMood } from "../../actions/profile";
import { setAlert } from "../../actions/alert";

const MoodTracker = ({
	displayCourses,
	courses: { allCourses, loading },
	setAlert,
	addMood,
}) => {
	const [myPopup, setMyPopup] = useState(false);
	const [myTimedPopup, setMyTimedPopup] = useState(false);

	const [formData, setFormData] = useState({
		mood: "",
		rating: 0,
		moodImage: "",
	});

	const { mood, rating, moodImage } = formData;

	console.log(formData);

	const onBtnClick = (e) => {
		setFormData({ ...formData, rating: e });
		console.log(e);
	};

	const onCardClick = (e) => {
		setFormData({ ...formData, mood: e });
		console.log(e);
	};

	const onBtnSubmit = (e) => {
		e.preventDefault();
		addMood(formData);
		console.log(formData);
	};

	useEffect(() => {
		setTimeout(() => {
			setMyTimedPopup(true);
		}, 3000);
		displayCourses();
	}, []);

	return (
		<div style={{ background: "#09386F", height: "auto" }}>
			{loading ? (
				<Fragment>Loading...</Fragment>
			) : (
				<Fragment>
					{allCourses.length > 0 ? (
						<Fragment>
							<Popup trigger={myPopup} setTrigger={setMyPopup}>
								<input
									type="button"
									onClick={(e) => {
										onBtnClick(1);
										onBtnSubmit(e);
									}}
									value="little"
								/>
								<input
									type="button"
									onClick={(e) => {
										onBtnClick(2);
										onBtnSubmit(e);
									}}
									value="Somewhat"
								/>
								<input
									type="button"
									onClick={(e) => {
										onBtnClick(3);
										onBtnSubmit(e);
									}}
									value="Very"
								/>
								<input
									type="button"
									onClick={(e) => {
										onBtnClick(4);
										onBtnSubmit(e);
									}}
									value="Extremely"
								/>
							</Popup>
							<p className="head">
								<dt>MoodTracker</dt>
							</p>
							<div className="allcards">
								<div className="row">
									<div
										className="column"
										onClick={() => {
											setMyPopup(true);
											onCardClick("Excited");
										}}
									>
										<MoodCard
											src="https://drive.google.com/uc?id=1w_rb_XRqAsFbBASc02QMD4IA4ugtTmKj"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1DzNB5V7FHaSe3OovfINBc8kp5qUrOVIx"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1w97oAyy8c4X7hy22BG3-lxKFisdjndI1"
											path="/moodtracker"
										/>
									</div>
								</div>
								<div className="row">
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1EvhKrSc1hCMw6PkUEkr3BIhGboXztHgI"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1VlnEdhGlt4_N9Mv3qfkHNEw-vOXFbpOU"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1pe5HaUDsHYHH12lEw7_h2kDat94zarJV"
											path="/moodtracker"
										/>
									</div>
								</div>
								<div className="row">
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1MhsEZ6l9t-pPlYvOUK-ag7p5KqvXb-N8"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1ikV-8TXf1ZHolDhiviqMPyJI2gXUo5UV"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1RSqxxw_i6Uc5pLC9x0XBdfQa8gQDf8Kg"
											path="/moodtracker"
										/>
									</div>
								</div>
								<div className="row">
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1XyqavLYiMp-M6tze6gZhD7EKiIV_Eyup"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=11EIuPwAgItCJifhdRFWZLe0sb4A2IjQz"
											path="/moodtracker"
										/>
									</div>
									<div className="column">
										<MoodCard
											src="https://drive.google.com/uc?id=1iEFU-EDhnkTRF5MT4sDcJxjNwAecRqIb"
											path="/moodtracker"
										/>
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						<Fragment>No course Added</Fragment>
					)}
				</Fragment>
			)}
		</div>
	);
};

MoodTracker.propTypes = {
	displayCourses: PropTypes.func.isRequired,
	courses: PropTypes.object.isRequired,
	setAlert: PropTypes.func.isRequired,
	addMood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	courses: state.courses,
});

export default connect(mapStateToProps, {
	displayCourses,
	setAlert,
	addMood,
})(MoodTracker);

/* 
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { displayCourses } from "../../actions/courses";
import CourseCard from './CourseCard';
import Popup from './Popup';

const GetCourses = ({ displayCourses, courses: { allCourses, loading } }) => {
	useEffect(() => {
		displayCourses();
	}, []);

	return (
		<Fragment>
			{loading ? (
				<Fragment>Loading...</Fragment>
			) : (
				<Fragment>
					{allCourses.length > 0 ? (
						<Fragment>
							{allCourses.map((course) => {
								return(<div key={course._id} style={{ border: "solid", width: "200px", margin:"10px" }}>
									{course.courseName}
									<br />
									{course.courseImage}
									<br />
									{course.musicLink}
									<br />
									{course.exerciseLink}
									<br />
								</div>)
                            })}
						</Fragment>
					) : (
						<Fragment>No course Added</Fragment>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};

GetCourses.propTypes = {
	displayCourses: PropTypes.func.isRequired,
	courses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	courses: state.courses,
});

export default connect(mapStateToProps, {
	displayCourses,
})(GetCourses); */
