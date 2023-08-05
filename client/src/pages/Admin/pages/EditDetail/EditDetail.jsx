import "./style.css"

export const EditDetail = () => {

    const tempData = {
        title: "카카오택시 잡는 방법! 이제 편하게 택시 잡으세요!",
        author: "루꼴라 피자",
        requester: "마르게리따 피자",
        reason: "됍니다->됩니다로 고쳐주세요.",
        date: "2023.07.21 11:27"
    }

    return (
        <section className="container">
            <h1>수정요청을 받은 글</h1>
            <div className="edit-header detail-header">
                <div className="edit-title">
                    <div>제목</div>
                    <div>{tempData.title}</div>
                </div>
                <div className="edit-author">
                    <div>글쓴이</div>
                    <div>{tempData.author}</div>
                </div>
                <div className="edit-requester">
                    <div>수정요청자</div>
                    <div>{tempData.requester}</div>
                </div>
                <div className="edit-date">
                    <div>수정요청일</div>
                    <div>{tempData.date}</div>
                </div>
            </div>

            <div className="edit-body">
                <div>요청사유</div>
                <div className="edit-reason">
                    {tempData.reason}
                </div>
            </div>

            <div className="edit-footer detail-footer">
                <button>작성자에게 알리기</button>
                <button>무시하기</button>
            </div>
        </section>
    )
};