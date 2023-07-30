import React from "react";

export const PostItem = ({ post }) => {
    return (
        <div>
            <img alt=""/>
            <h3>{post.title}</h3>
            <p>마지막 수정일: {post.date}</p>
            <p>{post.comment}</p>
            <p>Likes: {post.likes}</p>
            <p>Bookmarks: {post.bookmarks}</p>
        </div>
    );
};
