import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-user">
                <div className="post-user_image">
                    <img src={post.user.profile_image_url} alt={post.user.id} />
                </div>
                <div className="post-user_name">{post.user.id}</div>
            </div>
            <div className="post-title">
                <a href={post.url} target="_blank">{post.title}</a>
            </div>
        </div>
    );
};

export default Post;



