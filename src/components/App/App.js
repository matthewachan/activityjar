import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import JarList from '../../containers/JarList/JarList';
import AddJar from '../../containers/AddJar/AddJar';


class App extends Component {
  render() {
    return (
	<div className='container'>

		<div className='row'>
			<div className='col App-header text-primary'>
				<h2>Activity Jar</h2>
			</div>
		</div>

	    <div className='row'>
		    <div className='col'>
		        <AddJar/>
	        </div>
	    </div>

	    <div className='row'>
	    	<div className='col'>
		        <JarList/>
	        </div>
	    </div>
	    
	</div>
    );
  }
}
App.contextTypes = {
  store: React.PropTypes.object
};



// create-react-app default
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
