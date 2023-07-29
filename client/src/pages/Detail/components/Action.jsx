import React from "react";

export const Action = ({ contents }) => {
    return (
        <div>
            <button>좋아요</button>
            <label>{contents.likes}</label>
            <button>북마크</button>
            <label>{contents.bookmarks}</label>
            <button>요청</button>
        </div>
    );
};
