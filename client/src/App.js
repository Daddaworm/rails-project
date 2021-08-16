
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button } from 'react-bootstrap'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'




const App = () => {

  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  
  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if(!data.errors) {
      history.push('/')
      setErrors([])
    }
  }

  const checkSessionId = () => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => setCurrentUser(data.user))
  }
  
  useEffect(checkSessionId, []);
  
  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      { currentUser ? `${currentUser.username} is currently logged in.` : null }
      <Switch>
        <Route exact path='/'>
          <Home errors={errors} currentUser={currentUser} />
        </Route>
        <Route exact path='/signup'>
          <Signup handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/login'>
            <Login handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route exact path='/logout'>
            <Logout setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
