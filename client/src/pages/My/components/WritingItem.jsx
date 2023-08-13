import React from "react";

export const WritingItem = ({ writing }) => {
    return (
        <li>
            <img src={writing.thumbnail} alt="" />
            <h3>{writing.title}</h3>
            <p>{writing.updateAt}</p>
            <p>Likes: {writing.likeCnt}</p>
            <p>Books: {writing.bookmarkCnt}</p>
            <p>상태: {writing.status}</p>
        </li>
    );
};
