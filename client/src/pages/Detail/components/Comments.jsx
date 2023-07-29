import React from "react";

export const Comments = ({ contents }) => {
    return (
        <div>
            <img src="" alt="" />
            <p>{contents.nickname}</p>
            <p>{contents.text}</p>
            <button>삭제</button>
        </div>
    );
};
