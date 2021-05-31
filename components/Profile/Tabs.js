import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

import "./Tabs.css";

/* Tabs controls the displaying of the tab list as well as the correct content
 * for the currently selected tab from the list.
 *
 * Props:
 *  tabData (Object): Object that maps the tab headings with an array of elements
 *                    to be displayed within the tab grid.
 *                    For example: { "Tab Header": [ <div></div> ] }
 */
class Tabs extends Component {
	constructor(props) {
		super(props);
		this.tabHeaders = Object.keys(this.props.tabData);
		this.state = {
			activeTab: this.tabHeaders[0],
		};
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	};

	render() {
		const tabData = this.props.tabData;
		const activeTab = this.state.activeTab;

		// We only want to render the content for the currently active tab, so filter out content that is not relevant
		const tabContentElements = tabData[activeTab];

		// Defines that number of columns for certain browser widths
		const breakpointColumnsObj = {
			default: 3,
			1265: 2,
			985: 1,
		};

		return (
			<div className="tabs container">
				<div>
					<ul className="tab-list row">
						{Object.keys(tabData).map((tabHeader, i) => {
							return (
								<li>
									<Tab
										activeTab={activeTab}
										label={tabHeader}
										onClick={this.onClickTabItem}
										key={i}
									/>
								</li>
							);
						})}
					</ul>
					<br />
				</div>
				<div
					className="tab-content"
					columnClassName="tab-content-columns"
					breakpointCols={breakpointColumnsObj}
				>
					{tabContentElements}
				</div>
			</div>
		);
	}
}

Tabs.propTypes = {
	tabData: PropTypes.instanceOf(Object).isRequired,
};

export default Tabs;
