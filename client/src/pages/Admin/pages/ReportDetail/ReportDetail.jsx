import { ReportInfo } from "./Components/ReportInfo";

import "./style.css"

export const ReportDetail = () => {

    const tempData = {
        title: "카카오택시 잡는 방법! 이제 편하게 택시 잡으세요!",
        author: "루꼴라 피자",
        reasons : [
            {
                date: "23.07.21.11:27",
                name: "루꼴라 피자",
                reason: "마음에 안들어요",
            },
            {
                date: "23.07.21.11:27",
                name: "루꼴라 피자",
                reason: "마음에 안들어요",
            },
            {
                date: "23.07.21.11:27",
                name: "루꼴라 피자",
                reason: "마음에 안들어요",
            },
        ]
    }   

    return (
        <section className="container">
            <h1>신고를 많이 받은 글</h1>

            <div className="report-header">
                <div className="report-title">
                    <div>제목</div>
                    <div>{tempData.title}</div>
                </div>
                <div className="report-author">
                    <div>글쓴이</div>
                    <div>{tempData.author}</div>
                </div>
            </div>

            <div className="report-body">
                {tempData.reasons.map((reason, index) => 
                    <ReportInfo key={index} {...reason} />
                )}
            </div>

            <div className="report-footer">
                <button>숨기기 해제</button>
                <button>신고글 삭제</button>
            </div>

        </section>
    )
};