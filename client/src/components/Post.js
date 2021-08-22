import React, { useState } from 'react'
import EditPost from './EditPost'
import BlogCardTab from './BlogCardTab'
import { Card, Nav } from 'react-bootstrap'

const Post = ({ errors, post, setPosts, posts }) => {

    const { id } = post

    const [state, setState] = useState('#first')
    const blogTab = React.createRef()
    const editTab = React.createRef()
    const commentTab = React.createRef()

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
        if(e.target.href.includes('#link')){
            blogTab.current.className = "nav-link"
            editTab.current.className = "nav-link active"
        }
        setState(e.target.href)
    }

    const renderTab = () => {
        if (state.includes('#first')) {
            return <BlogCardTab post={post} handleDeletePost={handleDeletePost} errors={errors} />
        } else if (state.includes('#link')) {
            return <EditPost post={post} setPosts={setPosts} posts={posts} blogTab={blogTab} editTab={editTab} commentTab={commentTab} setState={setState} />
        } else {
            return <p>Comments section comming soon!</p>
        }
    }

    return (
        <Card id="post-card" border="dark" bg="light">
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} ref={blogTab} href="#first">Blog post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} ref={editTab} href="#link">Edit post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} ref={commentTab} href="#disabled">Comments</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {renderTab()}
            </Card.Body>
        </Card>
    )
}
export default Post
