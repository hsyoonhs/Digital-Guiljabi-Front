import { PostTable } from "../../Components/PostTable"

export const EditPost = () => {

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
            <h1>수정요청을 받은 글</h1>
            <select>
                <option>최신순</option>
            </select>

            <PostTable type={"요청"} data={tempData} />
        </section>
    )
}