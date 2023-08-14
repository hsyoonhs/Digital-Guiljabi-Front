import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Action = ({ contents, handleLike, handleBookmark }) => {
    const api_url = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const boardPk = parseInt(id, 10);

    const toggleLike = async () => {
        try {
            if (contents.liked) {
                await axios.delete(
                    `${api_url}/api/v1/boards/${boardPk}/likes`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            } else {
                await axios.post(
                    `${api_url}/api/v1/boards/${boardPk}/likes`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            }

            handleLike();
        } catch (error) {
            console.log("Error 발생 (좋아요) : ", error);
        }
    };

    const toggleBookmark = async () => {
        try {
            if (contents.bookmarked) {
                await axios.delete(
                    `${api_url}/api/v1/boards/${boardPk}/bookmarks`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            } else {
                await axios.post(
                    `${api_url}/api/v1/boards/${boardPk}/bookmarks`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
            }

            handleBookmark();
        } catch (error) {
            console.log("Error 발생 (북마크) : ", error);
        }
    };

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
            <button>요청</button>
        </div>
    );
};
