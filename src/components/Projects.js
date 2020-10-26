import React from 'react';
import './Projects.css';
import travlrthumbnail from "../images/travlr-thumbnail.png"; 
import greenecothumbnail from "../images/greeneco-thumbnail.png"; 
import coveredthumbnail from "../images/covered-thumbnail.png"; 

function Projects (){
	return (
		<div className="project-container">
			<a href="#/greeneco"> <img src={greenecothumbnail} alt="Green Eco project" /> 
				<div className="title"> GREEN ECO</div>  
			</a>
			<a href="#/travlr"> <img src={travlrthumbnail} alt="TRAVLR project" />
				<div className="title">TRAVLR</div> 
			</a>
			<a href="#/covered"> <img src={coveredthumbnail} alt="Covered project" />
				<div className="title"> COVERED</div>
			</a>
		</div>
	)
}

export default Projects;