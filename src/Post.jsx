import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p>
                {post.body.length <= 150
                    ? post.body
                    : `${post.body.slice(0, 150)}...`}
            </p>
        </article>
    );
}

export default Post;
