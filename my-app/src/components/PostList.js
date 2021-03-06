import React from 'react'
import PostItem from './PostItem'

const PostList = () => {
    const posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur "
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit"
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem ",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi"
        }
    ]

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList