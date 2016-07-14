import React from "react";

export default class Banner extends React.Component {
  render(){
    return (
    	<div className="banner">
    		<div className="logo">
				<img src="../../../images/logo.png" />
			</div>
			<div>
				<span>最小的品牌也有大品牌</span>
			</div>
		</div>
    );
  }
}