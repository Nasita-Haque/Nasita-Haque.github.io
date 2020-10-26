import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import GreenEco from './components/GreenEco';
import Travlr from './components/Travlr';
import Covered from './components/Covered';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="page">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/greeneco" exact component={GreenEco} />
          <Route path="/travlr" exact component={Travlr} />
          <Route path="/covered" exact component={Covered} />
        </Switch>
    </div>
    <Footer />
    </Router>
  )
};

export default App;


// function App() {
//   return (
//     <Router>
//     <div className="page">
//       <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/projects" component={Projects} />
//           <Route exact path="/aboutme" component={AboutMe} />
//           <Route exact path="/greeneco" component={GreenEco} />
//           <Route exact path="/travlr" component={Travlr} />
//           <Route exact path="/covered" component={Covered} />
//         </Switch>
//     </div>
//     <Footer />
//     </Router>
//   )
// };

// export default App;