import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts }) => {
    return (
        <ul>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <li key={post.id}>
                        <PostItem post={post} />
                    </li>
                ))
            ) : (
                <p>no post</p>
            )}
        </ul>
    );
};
