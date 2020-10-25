import React from 'react';
import './AboutMe.css'

function AboutMe (){
	return (
		<div className="about-container">
			<div className="profile-container">
				<div className="profile"></div>
			</div>
			<div className="description">
				<h2>Hi there!</h2> 
				<h3>Thanks for visiting my site.</h3>
				<p className="intro"> 
					I'm Nasita, a web developer turned aspiring user interface designer. 
				</p>
				<p className="body"> 
					My background in web development has taught me to prioritze the users needs and create simple solutions through a design thinking mentality. 
					As a result, I learned about the importance of creating practical designs through a coding perspective which is a valuable asset in creating future designs. I’ve always focused on the user through technology which is why I want to focus my passion on bringing people a better technological experience through an empathic and human approach.
				</p>
				<p className="email">
					I would love to connect at <a href = "mailto: nasita.haque@gmail.com">nasita.haque@gmail.com</a>.
				</p>
			</div>
		</div>
	)
}


export default AboutMe;