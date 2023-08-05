import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Form } from "./components/Form";
import { Source } from "./components/Source";
import { Action } from "./components/Action";
import { Comments } from "./components/Comments";
import { Write } from "./components/Write";

export const Detail = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({
        id: 1,
        title: "후잉이가 쓰는 글",
        profile: "",
        nickname: "나는 후잉",
        date: "2023-07-29",
        formData: [
            {
                subtitle: "날아가는 후잉",
                photo: "",
                text: "날아가는 후잉이가 보입니다. 이제 날 수 있는 오리로 성장했어요!",
            },
            {
                subtitle: "도망가는 후잉",
                photo: "",
                text: "도망가는 후잉이는 무슨 죄를 지은 걸까요?",
            },
        ],
        sourceData: [
            {
                name: "후잉이의 블로그",
                url: "http://Huing.com",
            },
            {
                name: "후잉이의 게시판",
                url: "http://HuingPost.com",
            },
        ],
        actionData: {
            likes: 432,
            bookmarks: 304,
            liked: false,
            bookmarked: false,
        },
    });

    const handelCommentSubmit = (commentText) => {
        const newComment = {
            photo: "",
            nickname: "슬픈 후잉",
            text: commentText,
        };

        setComments((prevComments) => [...prevComments, newComment]);
    };

    const handleLike = () => {
        setPost((prevPost) => ({
            ...prevPost,
            actionData: {
                ...prevPost.actionData,
                likes: prevPost.actionData.liked
                    ? prevPost.actionData.likes - 1
                    : prevPost.actionData.likes + 1,
                liked: !prevPost.actionData.liked,
            },
        }));
    };

    const handleBookmark = () => {
        setPost((prevPost) => ({
            ...prevPost,
            actionData: {
                ...prevPost.actionData,
                bookmarks: prevPost.actionData.bookmarked
                    ? prevPost.actionData.bookmarks - 1
                    : prevPost.actionData.bookmarks + 1,
                bookmarked: !prevPost.actionData.bookmarked,
            },
        }));
    };

    return (
        <div>
            <TopBar contents={post} />
            {post.formData.map((formData, index) => (
                <Form key={index} contents={formData} />
            ))}
            <h3>출처</h3>
            {post.sourceData.map((sourceData, index) => (
                <Source key={index} contents={sourceData} />
            ))}
            <Action
                contents={post.actionData}
                handleLike={handleLike}
                handleBookmark={handleBookmark}
            />
            <Write submitComments={handelCommentSubmit} />

            {comments.map((comment, index) => (
                <Comments key={index} contents={comment} />
            ))}
        </div>
    );
};
