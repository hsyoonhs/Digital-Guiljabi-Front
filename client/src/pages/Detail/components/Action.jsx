import React from "react";

export const Action = ({ contents, handleLike, handleBookmark }) => {
    return (
        <div>
            <button onClick={handleLike}>
                {contents.liked ? "좋아요 취소" : "좋아요"}
            </button>
            <label>{contents.likeCnt}</label>
            <button onClick={handleBookmark}>
                {contents.bookmarked ? "북마크 취소" : "북마크"}
            </button>
            <label>{contents.bookmarkCnt}</label>
            <button>요청</button>
        </div>
    );
};
