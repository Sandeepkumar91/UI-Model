import React from 'react';
import DisplayData from './DisplayData';
import ClientTable from './ClientTable'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
      <div className="App">
       <Router>
					<Route path="/" exact component={DisplayData} />
					<Route path="/clients"  component={ClientTable} />
				</Router>
      </div>
    
  );
}

export default App;
 