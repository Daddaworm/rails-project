import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'




const Post = ({ post, setPosts, posts }) => {
    // const { id, title, content } = post;


    // const onChange = (e) => {
    //     setState({...state, [e.target.name]: e.target.value})
    // }

    const handleDeletePost = () => {
        let config = {
            method: 'DELETE'
        }

        fetch(`/posts/${post.id}`, config)
        setPosts(
            posts.filter(singlePost => {
                return singlePost.id !== post.id 
            })
        )
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
            </Card.Body>
        </Card>
    )
}

export default Post
