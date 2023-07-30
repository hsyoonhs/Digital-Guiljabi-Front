import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Form } from "./components/Form";
import { Source } from "./components/Source";
import { Action } from "./components/Action";
import { Comments } from "./components/Comments";
import { Write } from "./components/Write";

export const Detail = () => {
    const [comments, setComments] = useState([]);

    const handelCommentSubmit = (commentText) => {
        const newComment = {
            photo: "",
            nickname: "슬픈 후잉",
            text: commentText,
        };

        setComments((prevComments) => [...prevComments, newComment]);
    };

    const topBarData = {
        title: "후잉이가 쓰는 글",
        nickname: "나는 후잉",
        date: "2023-07-29",
    };

    const formData = [
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
    ];

    const sourceData = [
        {
            name: "후잉이의 블로그",
            url: "http://Huing.com",
        },
        {
            name: "후잉이의 게시판",
            url: "http://HuingPost.com",
        },
    ];

    const actionData = {
        likes: 432,
        bookmarks: 304,
    };

    return (
        <div>
            <TopBar contents={topBarData} />
            {formData.map((formData, index) => (
                <Form key={index} contents={formData} />
            ))}
            <h3>출처</h3>
            {sourceData.map((sourceData, index) => (
                <Source key={index} contents={sourceData} />
            ))}
            <Action contents={actionData} />
            <Write submitComments={handelCommentSubmit} />

            {comments.map((comment, index) => (
                <Comments key={index} contents={comment} />
            ))}
        </div>
    );
};
