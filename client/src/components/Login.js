import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Errors from './Errors'

const Login = ({ handleUserLoginAndSignup, errors }) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/login', config)
            .then(resp => resp.json())
            .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <div>
            <br />
            <h6>Already a member?  Please log in below.</h6>
            <br/>
            {/* <form onSubmit={onSubmit}>
                <label>Username</label>
                <input onChange={onChange} name='username' type='text' placeholder='username' />
                <br />
                <label>Password</label>
                <input onChange={onChange} name='password' type='password' placeholder='password' />
                <br />
                <input type='submit' value='Login' />
            </form>  */}

            <Form onSubmit={onSubmit} id='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Username</Form.Label> */}
                    <Form.Control onChange={onChange} name='username' type="text" placeholder="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control onChange={onChange} name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br />
            <Errors errors={errors} />
        </div>
    )
}
export default Login;