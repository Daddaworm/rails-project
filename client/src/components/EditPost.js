import React, { useState } from 'react'


const EditPost = ({ post, setPosts, posts }) => {
    const {id} = post

    const [form, setForm] = useState({title: post.title, content: post.content})
    
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
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
        .then(data => setPosts(posts.map(singlePost => singlePost.id == id ? data.post : singlePost))
        )
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Edit blog title:</label><br/>
                    <input  onChange={onChange} type="text" id="title" name="title" value={form.title} /><br/>
                <label for="content">Edit content:</label><br/>
                    <textarea onChange={onChange} type="text" id="content" name="content" value={form.content} /><br/><br/>
                    <input type="submit" value="Update"/>
            </form> 
        </div>
    )
}
export default EditPost
