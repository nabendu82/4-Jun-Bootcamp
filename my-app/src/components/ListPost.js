import React, { Component } from 'react'
import PostItem from './PostItem';

class ListPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({ posts: data });
    }

    render() {
        const { posts } = this.state;
        return posts.map(post => <PostItem key={post.id} post={post} />)
    }
}

export default ListPost
