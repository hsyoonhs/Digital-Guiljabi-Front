import React from "react";

export const TopBar = ({ contents }) => {
    return (
        <div>
            <img src={contents.thumbnailUrl} alt="" />
            <h1>{contents.title}</h1>
            <img src="" alt="" />
            <label>{contents.writerName}</label>
            <label>{contents.updateAt}</label>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
};
