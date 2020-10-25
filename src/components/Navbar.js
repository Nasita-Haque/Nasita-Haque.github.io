import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	
	state = { clicked1: false, clicked2: false}

	handleClick = (e) => {
		if (e.target.text === "PROJECTS"){
			this.setState({ clicked1: true, clicked2: false})
		} else if (e.target.text === "ABOUT ME") {
			this.setState({ clicked1: false, clicked2: true})

		} else {
			this.setState({ clicked1: false, clicked2: false})
		}

  	}

	render(){

		return(
			<nav className="navbar"> 
				<Link 
					to="/" 
					className={`${"logo"} ${"nav-link"}`}
					onClick={this.handleClick}>
						NASITA HAQUE
				</Link>
				<ul className="menu">
					<li>
						<Link 
							to="/projects" 
							className={this.state.clicked1 === true ? "underline-link" : "nav-link"}
							onClick={this.handleClick}>
								PROJECTS
						</Link>
					</li>
					<li>
						<Link 
							to="/aboutme" 
							className={this.state.clicked2 === true ? "underline-link" : "nav-link"}
							onClick={this.handleClick}>
								ABOUT ME
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;