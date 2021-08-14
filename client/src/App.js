
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import Signup from './components/Signup'
import { useState, useEffect } from 'react'


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])

  return (
    <div className="App">
      <Signup setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/>
    </div>
  );
}

export default App;
