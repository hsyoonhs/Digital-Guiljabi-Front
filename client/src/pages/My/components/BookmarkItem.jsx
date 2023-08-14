import React from "react";

export const BookmarkItem = ({ bookmark }) => {
    return (
        <li>
            <img src={bookmark.thumbnail} alt="" />
            <h3>{bookmark.title}</h3>
            <p>{bookmark.updateAt}</p>
            <p>Likes: {bookmark.likeCnt}</p>
            <p>Books: {bookmark.bookmarkCnt}</p>
        </li>
    );
};
