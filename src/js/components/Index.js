import React from "react";

export default class Index extends React.Component {
  render(){
    return (
    	<div>
			<h1>Hello,{this.props.name}</h1>
			<p>This is a ReactJS template</p>
			<p>Here we begin </p>
		</div>
    );
  }
}