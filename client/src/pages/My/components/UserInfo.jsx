import React, { useState } from "react";

export const UserInfo = ({ user, onSave }) => {
    const [editing, setEditing] = useState(false);
    const [editUser, setEditUser] = useState({ ...user });

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
        console.log(editUser);
        onSave(editUser);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    return (
        <div>
            <div>
                <img src="" alt="프로필" />
            </div>
            <div>
                <div>
                    <p>
                        닉네임 :{" "}
                        {editing ? (
                            <input
                                name="nickname"
                                value={editUser.nickname}
                                onChange={handleInputChange}
                            />
                        ) : (
                            user.nickname
                        )}
                    </p>
                </div>
                <div>
                    <p>가입날짜 : {user.joinDate}</p>
                </div>
                <div>
                    <p>
                        1365 아이디{" "}
                        {editing ? (
                            <input
                                name="id1365"
                                value={editUser.id1365}
                                onChange={handleInputChange}
                            />
                        ) : (
                            user.id1365
                        )}
                    </p>
                </div>
                <div>
                    <p>
                        VMS 아이디 :{" "}
                        {editing ? (
                            <input
                                name="idVMS"
                                value={editUser.idVMS}
                                onChange={handleInputChange}
                            />
                        ) : (
                            user.idVMS
                        )}
                    </p>
                </div>
                <div>
                    <p>한줄소개</p>
                    <p>
                        {editing ? (
                            <textarea
                                name="introduction"
                                value={editUser.introduction}
                                onChange={handleInputChange}
                            />
                        ) : (
                            user.introduction
                        )}
                    </p>
                </div>
            </div>
            <div>
                {editing ? (
                    <button onClick={handleSaveClick}>저장</button>
                ) : (
                    <button onClick={handleEditClick}>편집</button>
                )}
            </div>
        </div>
    );
};
