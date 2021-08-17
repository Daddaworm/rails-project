import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Posts = ({ post }) => {
    return (
        <Card>
            {/* <Card.Header as="h5">Featured</Card.Header> */}
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
                <Button variant="primary">Add Comment</Button>
            </Card.Body>
        </Card>
    )
}

export default Posts
