import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const EditPost = ({ post, setPosts, posts }) => {
    
    const { id } = post

    const [form, setForm] = useState({ title: post.title, content: post.content })

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/posts/${post.id}`, config)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setPosts(posts.map(singlePost => singlePost.id === id ? data : singlePost))}
            )
    }         

    return (
        <div>
            {/* <form id='edit-form' onSubmit={onSubmit} >
                <label for="title">Edit blog title:</label><br />
                <input onChange={onChange} type="text" id="title" name="title" value={form.title} /><br />
                <label for="content">Edit content:</label><br />
                <textarea onChange={onChange} type="text" id="content" name="content" value={form.content} /><br /><br /> */}
                {/* <input type="submit" value="Update"/>
            </form> */}
            <Form onSubmit={ onSubmit } >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.title } name='title' type="text" placeholder="Blog subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.content } name="content" type='text' as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="primary">Update post</Button>
            </Form>
        </div>
    )
}
export default EditPost
