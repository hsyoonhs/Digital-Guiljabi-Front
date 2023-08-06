import { usePosts } from "../../../../hooks/usePosts"
import { PostTable } from "../../Components/PostTable"

export const EditPost = () => {

    const posts = usePosts("edit-requests");

    return (
        <section className="container">
            <h1>수정요청을 받은 글</h1>
            <select>
                <option>최신순</option>
            </select>

            <PostTable type={"edit"} data={posts} />
        </section>
    )
}