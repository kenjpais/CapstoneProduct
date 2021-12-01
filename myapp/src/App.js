import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, Navigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home.js'
import About from './Components/About/About.js'
import Contact from './Components/Contact/Contact.js'
import SignIn from './Components/Sign/SignIn';
import MoneyTranfer from './Components/MoneyTransfer/MoneyTranfer';
import Ministatement from './Components/Ministatements/Ministatement';
import AccountDetails from './Components/AccountDetails/AccountDetails'
import Deposit from './Components/Deposit/Deposit';
import { PrivateRoute } from './Components/Auth/PrivateRoute';
import Logout from './Components/Auth/Logout';
import Component404 from './Components/Auth/Component404';
import SuccessTransfer from './Components/SuccessTransfer';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='*' exact element={<Component404/>}/>
          <Route path='/logout' element={<PrivateRoute><Logout/></PrivateRoute>} />
          <Route  path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path="/about" element={<PrivateRoute><About /> </PrivateRoute>} />
          <Route exact path="/contact" element={<PrivateRoute><Contact />  </PrivateRoute>} />
          <Route exact path="/ministate" element={<PrivateRoute><Ministatement />  </PrivateRoute>} />
          <Route exact path="/transfer" element={<PrivateRoute><MoneyTranfer />  </PrivateRoute>} />
          <Route exact path="/accountdetails" element={<PrivateRoute><AccountDetails />  </PrivateRoute>} />
          <Route exact path="/deposit" element={<PrivateRoute><Deposit />  </PrivateRoute>} />
          <Route exact path="/success" element={<PrivateRoute><SuccessTransfer/> </PrivateRoute>} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
