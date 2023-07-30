import React from "react";

export const BookmarkItem = ({ bookmark }) => {
    return (
        <li>
            <img />
            <h3>{bookmark.title}</h3>
            <p>Likes: {bookmark.likes}</p>
            <p>Books: {bookmark.bookmarks}</p>
        </li>
    );
};
