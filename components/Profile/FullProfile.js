import React, { useState } from "react";
import userData from "../Data/UserData.json";

import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

/*    
    ADDING STYLE
    ------------
    The following two lines are where we include our
    CSS stylesheets for sprucin' up the page!
    -> colours.css contains references to different
       colours being used throughout the application;
    -> App.css contains CSS specific to the App component
       we are currently defining in JavaScript!
*/

/*
    REACT IN ACTION
    ------------ 
    Here begins our journey in writing our first React 
    component! From top to bottom, check out the different 
    parts of this component!
*/
// (1) Defining the React Component;
const FullProfile =()=> {

    const [usersData,setUserData]=useState(userData);

	// (3.2) The render function!
		return (
			<div style={{ background: "#09386F" }}>
				<div className="app">
					<ProfileHeader userData={usersData} />
					<ProfileBody userDetails={usersData.details} />
				</div>
			</div>
		);
	}


/* 
  "Export" allows the component to be imported and used in other files. 
  We are using default exports throughout the project as it is convention 
  for React (with one class per file). The alternative is "named exports", 
  see the following for differences between default and named exports:
  LINK: 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
*/
export default FullProfile;
