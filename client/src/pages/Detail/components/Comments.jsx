import React from "react";

export const Comments = ({ contents, onDelete }) => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log("이름", currentUser);

    return (
        <div>
            <img src={contents.profileUrl} alt="프로필" />
            <label>{contents.username}</label>
            <label>{contents.createAt}</label>
            <p>{contents.content}</p>
            {currentUser && currentUser.username === contents.username && (
                <button onClick={() => onDelete(contents.commentPk)}>
                    삭제
                </button>
            )}
        </div>
    );
};
