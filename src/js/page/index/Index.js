import React from "react";

import TopBar from './partial/TopBar';

export default class Index extends React.Component {
  render(){
    return (
    	<div className="wrap">
    		<div className="topContainer">
    			<TopBar />
			</div>
			<h1>Hello,{this.props.name}</h1>
			<p>This is a ReactJS template</p>
			<p>Here we begin </p>
		</div>
    );
  }
}