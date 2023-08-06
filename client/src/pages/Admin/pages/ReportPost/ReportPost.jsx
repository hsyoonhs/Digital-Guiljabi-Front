import { usePosts } from "../../../../hooks/usePosts";

import { PostTable } from "../../Components/PostTable"

export const ReportPost = () => {

    const posts = usePosts("boards/top-reported");    

    const tempData = [
        {
            date: "2021-09-01",
            author: "홍길동",
            title: "게시물 제목",
            remark: "비고"
        },
        {
            date: "2021-09-01",
            author: "홍길동",
            title: "게시물 제목",
            remark: "비고"
        },
    ]

    return (
        <section className="container">
            <h1>신고된 게시물 목록</h1>
            <select>
                <option>최신순</option>
                <option>신고순</option>
            </select>
            <input type="checkbox" id="all" />
            <label htmlFor="all">누적 5회만 보기</label>

            <PostTable type={"report"} data={posts} />
        </section>  
    )
}
