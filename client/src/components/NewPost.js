// rafce
import { useState, } from 'react'
import { Button, Form } from 'react-bootstrap'
import Errors from './Errors'

const NewPost = ({ handleUserLoginAndSignup, errors, setPosts, posts }) => {

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
        fetch('/posts', config)
            .then(resp => resp.json())
            .then(data => {
                setPosts([data, ...posts])
                handleUserLoginAndSignup(data)
            })
    }

    return (
        <div>
            <br />
            <br />
            <Form id='create-form' onSubmit={onSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Blog title</Form.Label>
                    <Form.Control onChange={onChange} name='title' type="text" placeholder="Blog title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control onChange={onChange} name="content" type='text' as="textarea" placeholder="Content" rows={3} />
                </Form.Group>
                <Button type="submit" variant="outline-primary">Create blog post</Button>
            </Form>
            <br />
            <Errors errors={errors} />
        </div>
    )
}
export default NewPost;