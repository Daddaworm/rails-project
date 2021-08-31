import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Errors from './Errors'

const Signup = ({ handleUserLoginAndSignup, errors }) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
            .then(resp => resp.json())
            .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <div>
            <br />
            <br />
            <h5>Become a member of our community!</h5>
            <p>Members will have exclusive privilages to post, edit and comment on blogs!</p>
            <br />
            <Form onSubmit={onSubmit} id='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control onChange={onChange} name='username' type="text" placeholder="username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={onChange} name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={onChange} name='password_confirmation' type="password" placeholder="Password Confirmation" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Sign up
                </Button>
            </Form>
            <br />
            <Errors errors={errors} />
        </div>
    )
}
export default Signup;