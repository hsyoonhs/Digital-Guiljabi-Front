import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Action = ({
    contents,
    handleRequest,
    toggleLike,
    toggleBookmark,
}) => {
    return (
        <div>
            <button onClick={toggleLike}>
                {contents.liked ? "좋아요 취소" : "좋아요"}
            </button>
            <label>{contents.likeCnt}</label>
            <button onClick={toggleBookmark}>
                {contents.bookmarked ? "북마크 취소" : "북마크"}
            </button>
            <label>{contents.bookmarkCnt}</label>
            <button onClick={handleRequest}>요청</button>
        </div>
    );
};
