import { PostTable } from "../../Components/PostTable"

import "../../../../styles/admin.css"
import { usePosts } from "../../../../hooks/usePosts";

export const WaitingPost = () => {

    const posts = usePosts("boards/waiting");

    return (
        <section className="container">
            <h1>승인대기 게시물 목록</h1>
            <select>
                <option>최신순</option>
            </select>

            <PostTable type={"wait"} data={posts} />
        </section>
    )
}
