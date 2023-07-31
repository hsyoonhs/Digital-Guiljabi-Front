import React from "react";

export const WritingItem = ({ writing }) => {
    return (
        <li>
            <img />
            <h3>{writing.title}</h3>
            <p>Likes: {writing.likes}</p>
            <p>Books: {writing.bookmarks}</p>
            <p>상태: {writing.state}</p>
        </li>
    );
};
