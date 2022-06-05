import React, { useState } from 'react'
import axios from 'axios';

const PostForm = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleUserIdChange = e => {
        setUserId(e.target.value);
    }

    const handleTitleChange = e => {
        setTitle(e.target.value);
    }

    const handleBodyChange = e => {
        setBody(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userId">UserId </label>
                    <input type="text" id="userId" value={userId} onChange={handleUserIdChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body </label>
                    <textarea id="body" value={body} onChange={handleBodyChange}></textarea>
                </div>
                <br />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
    )
}

export default PostForm