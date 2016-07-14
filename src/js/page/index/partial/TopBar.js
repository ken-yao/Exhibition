import React from "react";

export default class TopBar extends React.Component {
  render(){
    return (
    	<div className="topBar">
    		<div className="topBarContainer">
				<img src="../../../images/mobile.png" />
				<span className="topBarMobileText">手机E展地</span>
			</div>
		</div>
    );
  }
}