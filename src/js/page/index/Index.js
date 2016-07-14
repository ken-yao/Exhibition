import React from "react";

import TopBar from './partial/TopBar';
import Banner from './partial/Banner';

export default class Index extends React.Component {
  render(){
    return (
    	<div className="wrap">
    		<div>
    			<TopBar />
		    </div>
        <div>
            <Banner />
        </div>
  			<p>Here we begin </p>
  		</div>
    );
  }
}