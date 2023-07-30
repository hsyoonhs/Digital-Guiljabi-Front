import React from "react";

export const TopBar = ({ contents }) => {
    return (
        <div>
            <h1>{contents.title}</h1>
            <img src="" alt="" />
            <label>{contents.nickname}</label>
            <label>{contents.date}</label>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
};
