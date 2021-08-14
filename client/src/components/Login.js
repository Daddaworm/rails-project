

import { useState } from 'react'
import Errors from './Errors'

const Signup = ({ errors }) => {

    const [state, setState] = useState({})
    

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
    
    }


    return(
        <div>
            <br/>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input onChange={onChange} name='username' type='text'/>
                <br/>
                <label>Password</label>
                <input onChange={onChange} name='password' type='password'/>
                <br/>
                <input type='submit' value='Login'/>
            </form>
            <br/>
            {/* <Errors errors={errors} /> */}
        </div>
    )


}

export default Signup;