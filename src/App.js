import React from 'react';
import HomePage from './components/homepage';
import VendorList from './components/vendor_list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
     <div className="App">
       <Router>
        <Switch>
          <Route path="/vendorlist">
              <VendorList />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
