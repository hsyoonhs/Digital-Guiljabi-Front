import { UserInfo } from "./components/UserInfo";
import { UserContent } from "./components/UserContent";
import { useState } from "react";

export const My = () => {
    const initUserData = {
        nickname: "commeci",
        joinDate: "2023-07-28",
        id1365: "commeci1365",
        idVMS: "commeciVMS",
        introduction: "내 이름은 commeci! 많은 정보를 알려주기 위해 노력할게!",
    };

    const [userData, setUserData] = useState({ ...initUserData });

    const bookmarkData = [
        {
            title: "bookmark1",
            likes: 10,
            bookmarks: 5,
        },
        {
            title: "bookmark2",
            likes: 10,
            bookmarks: 5,
        },
    ];

    const writingsData = [
        {
            title: "writing1",
            likes: 10,
            bookmarks: 5,
            state: "대기",
        },
        {
            title: "writing2",
            likes: 10,
            bookmarks: 5,
            state: "허용",
        },
    ];

    const saveUser = (editUser) => {
        setUserData({ ...editUser });
    };

    return (
        <>
            <h1>My</h1>
            <UserInfo user={userData} onSave={saveUser} />
            <UserContent bookmarks={bookmarkData} writings={writingsData} />
        </>
    );
};
