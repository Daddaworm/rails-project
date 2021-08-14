
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'



function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleCreateUser = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
}
  
  const checkSessionId = () => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => setCurrentUser(data.user))
  }
  
  useEffect(checkSessionId, []);
  
  return (
    <div className="App">
      <Navbar />
      { currentUser ? `${currentUser.username} is currently logged in.` : null }
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup handleCreateUser={handleCreateUser} errors={errors}/>
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
