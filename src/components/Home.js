import React from 'react';
import './Home.css';
import bike from "../images/bike-bg.jpg";

function Home (){
	return (
			<div className="container">
				<div className="caption"> Hi, I'm Nasita a NYC based UI designer. </div>
				<div className="image">
					<img className="bike-image" src={bike} alt="Bike" />
				</div>
			</div>

	)
}

export default Home;


// function Home (){
// 	return (
// 			<div className="container">
// 				<div className="caption"> Hi, I'm Nasita a NYC based UI designer. </div>
// 				<div className="image"></div>
// 			</div>

// 	)
// }
