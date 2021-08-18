import React, { useState } from 'react'
import Errors from './Errors'
import EditPost from './EditPost'
import BlogCardTab from './BlogCardTab'
import { Card, Button, Nav } from 'react-bootstrap'

const Post = ({ errors, post, setPosts, posts }) => {

    const { id } = post

    const [state, setState] = useState('http://localhost:4000/home#first')

    const renderCardContent = () => {

    }

    const handleDeletePost = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/posts/${id}`, config)
            .then(resp => {
                console.log(resp)
                if (resp.ok) {
                    setPosts(posts.filter(post => post.id !== id))
                }
            })
    }

    const handleTab = (e) => {
        setState(e.target.href)
    }

    const renderTab = () => {
        if(state.includes('#first')){
            return <BlogCardTab post={post} handleDeletePost={handleDeletePost} errors={errors} />
        } else if (state.includes('#link')) {
            return <EditPost post={post} setPosts={setPosts} posts={posts} />
        } else {
            return <p>Comments section comming soon!</p>
        }
    }

    return (
        <Card className='post-card'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} href="#link">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} href="#disabled">Comments</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {renderTab()}
                {/* <BlogCardTab post={post} handleDeletePost={handleDeletePost} errors={errors} /> */}
                {/* <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                <Button onClick={handleDeletePost} variant="primary">Delete post</Button>
                    <Errors errors={errors} /> */}
            </Card.Body>
        </Card>
    )
}
export default Post
