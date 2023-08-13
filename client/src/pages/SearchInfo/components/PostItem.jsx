import React from "react";

export const PostItem = ({ post }) => {
    return (
        <div>
            <img alt="" />
            <h3>{post.title}</h3>
            <p>마지막 수정일: {post.updateAt}</p>
            <p>{post.introduction}</p>
            <p>Likes: {post.likeCnt}</p>
            <p>Bookmarks: {post.bookmarkCnt}</p>
        </div>
    );
};
