import { UserInfo } from "./components/UserInfo";
import { UserContent } from "./components/UserContent";
import { useEffect, useState } from "react";
import axios from "axios";

export const My = () => {
    const api_url = process.env.REACT_APP_API_URL;
    const [userData, setUserData] = useState(null);
    const [bookmarkData, setBookmarkData] = useState([]);
    const [writingsData, setWritingsData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    `${api_url}/api/v1/users/info/my`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                const userDataFromServer = response.data;
                setUserData(userDataFromServer);
            } catch (error) {
                console.error("Error 발생: ", error);
            }
        };

        const fetchBookmarkData = async () => {};

        const fetchWritingsData = async () => {};

        fetchUserData();
        fetchBookmarkData();
        fetchWritingsData();
    }, []);

    const saveUser = (editUser) => {
        setUserData({ ...editUser });
    };

    console.log(userData);

    return (
        <>
            <h1>My</h1>
            {userData === null ? (
                <p>로딩중</p>
            ) : (
                <UserInfo user={userData} onSave={saveUser} />
            )}
            <UserContent bookmarks={bookmarkData} writings={writingsData} />
        </>
    );
};
