import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { displayCourses } from "../../actions/courses";
import CourseCard from "./CourseCard";

const GetCourses = ({ displayCourses, courses: { allCourses, loading } }) => {
	useEffect(() => {
		displayCourses();
	}, []);

	return (
		<div style={{ background: "#09386F", height:"auto" }}>
			{loading ? (
				<Fragment>Loading...</Fragment>
			) : (
				<Fragment>
					{allCourses.length > 0 ? (
						<Fragment>
							<p
								style={{
									color: "white",
									fontWeight: "bolder",
									fontSize: "5vh",
									paddingTop: "3vh",
									textAlign: "center",
								}}
							>
								<dt>Saorsa+ Courses</dt>
							</p>
							<div className="container-fluid">
								<div>
									{allCourses.map((course) => {
										return (
											<div
												key={course._id}
												style={{ marginLeft: "6vw", marginBottom: "6vh" }}
											>
												<CourseCard
													src="https://static.toiimg.com/photo/72975551.cms"
													path="/courses"
													name={course.courseName}
												/>
											</div>
										);
									})}
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

GetCourses.propTypes = {
	displayCourses: PropTypes.func.isRequired,
	courses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	courses: state.courses,
});

export default connect(mapStateToProps, {
	displayCourses,
})(GetCourses);

/* 
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { displayCourses } from "../../actions/courses";
import CourseCard from './CourseCard';

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
