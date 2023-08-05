import React from "react";

export const Action = ({ contents, handleLike, handleBookmark }) => {
    return (
        <div>
            <button onClick={handleLike}>좋아요</button>
            <label>{contents.likes}</label>
            <button onClick={handleBookmark}>북마크</button>
            <label>{contents.bookmarks}</label>
            <button>요청</button>
        </div>
    );
};
