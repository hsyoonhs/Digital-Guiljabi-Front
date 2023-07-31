import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <PostItem post={post} />
                    </li>
                );
            })}
        </ul>
    );
};
