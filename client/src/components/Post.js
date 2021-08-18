import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'
import Errors from './Errors'

const Post = ({ currentUser, errors, post, setPosts, posts }) => {
    
    const {id} = post

    const handleDeletePost = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/posts/${id}`, config)
        .then(resp => {
            if (resp.ok){
                setPosts(posts.filter(post => post.id !== id))
            }
        })
    }

    return (
        <Card className='post-card'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled">Comments</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                <Button onClick={handleDeletePost} variant="primary">Delete post</Button>
                    <Errors errors={errors} />
            </Card.Body>
        </Card>
    )
}
export default Post
