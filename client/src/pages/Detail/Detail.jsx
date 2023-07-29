import { useState } from "react";
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

    return (
        <div>
            <Write submitComments={handelCommentSubmit} />

            {comments.map((comment, index) => (
                <Comments key={index} contents={comment} />
            ))}
        </div>
    );
};
