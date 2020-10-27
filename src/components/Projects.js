import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import travlrthumbnail from "../images/travlr-thumbnail.png"; 
import greenecothumbnail from "../images/greeneco-thumbnail.png"; 
import coveredthumbnail from "../images/covered-thumbnail.png"; 

function Projects (){
	return (
		<div className="project-container">
			<Link to="/greeneco" > <img src={greenecothumbnail} alt="Green Eco project" />
				<div className="title1"> GREEN ECO</div>  			
			</Link>
			<Link to="/travlr" > <img src={travlrthumbnail} alt="TRAVLR project" />
				<div className="title2"> TRAVLR</div>  
			</Link>
			<Link to="/covered" > <img src={coveredthumbnail} alt="Covered project" />
				<div className="title3"> COVERED</div>  
			</Link>
		</div>
	)
}

export default Projects;