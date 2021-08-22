import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const EditPost = ({ post, setPosts, posts, blogTab, editTab, commentTab, setState }) => {
    
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
                if(!data.error) {
                    setPosts(posts.map(singlePost => singlePost.id === id ? data : singlePost))
                }
            } 
        )
        blogTab.current.className = "nav-link active"
        editTab.current.className = "nav-link"
        setState('#first')
        
    }         

    return (
        <div>
            <Form onSubmit={ onSubmit } >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Blog title</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.title } name='title' type="text" placeholder="Blog subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control onChange={ onChange } value={ form.content } name="content" type='text' as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="outline-primary" size="sm" >Update post</Button>
            </Form>
        </div>
    )
}
export default EditPost
