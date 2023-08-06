import { useState, useEffect } from "react";
import axios from "axios";
import { TopBar } from "./components/TopBar";
import { Form } from "./components/Form";
import { Source } from "./components/Source";
import { Tag } from "./components/Tag";
import { Action } from "./components/Action";
import { Comments } from "./components/Comments";
import { Write } from "./components/Write";

export const Detail = () => {
    const api_url = process.env.REACT_APP_API_URL;
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axios.get(
                    `${api_url}/api/v1/boards/${1}`,
                    {
                        headers: {
                            Authorization: `Bearer: ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                const postDataFromServer = response.data;
                setPost(postDataFromServer);
            } catch (error) {
                console.error("Error 발생 : ", error);
            }
        };

        fetchPostData();
    }, []);

    const handelCommentSubmit = (commentText) => {
        const newComment = {
            photo: "",
            nickname: "후잉",
            text: commentText,
        };

        setComments((prevComments) => [...prevComments, newComment]);
    };

    const handleLike = () => {
        setPost((prevPost) => ({
            ...prevPost,
            likeCnt: prevPost.liked
                ? prevPost.likeCnt - 1
                : prevPost.likeCnt + 1,
            liked: !prevPost.liked,
        }));
    };

    const handleBookmark = () => {
        setPost((prevPost) => ({
            ...prevPost,
            bookmarks: prevPost.bookmarked
                ? prevPost.bookmarkCnt - 1
                : prevPost.bookmarkCnt + 1,
            bookmarked: !prevPost.bookmarked,
        }));
    };

    return (
        <div>
            {post === null ? (
                <p>로딩중</p>
            ) : (
                <>
                    <TopBar contents={post} />
                    {post.cards.map((card, index) => (
                        <Form key={index} contents={card} />
                    ))}
                    <h3>출처</h3>
                    {post.sources.map((source, index) => (
                        <Source key={index} contents={source} />
                    ))}
                    {post.tags.map((tag, index) => (
                        <Tag key={index} contents={tag} />
                    ))}
                    <Action
                        contents={post}
                        handleLike={handleLike}
                        handleBookmark={handleBookmark}
                    />
                    <Write submitComments={handelCommentSubmit} />

                    {comments.map((comment, index) => (
                        <Comments key={index} contents={comment} />
                    ))}
                </>
            )}
        </div>
    );
};
