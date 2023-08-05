import { useState } from "react";
import { WaitDialog } from "./Components/WaitDialog";

import "./style.css"


export const WaitDetail = () => {

    const tempData = {
        title : "카카오택시 50% 할인 이벤트",
        author: "루꼴라 피자",
        category: "애플리케이션",
        hashTag: ["#카카오택시", "#할인", "#이벤트"],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        introduction: `카카오택시에서 50% 할인 이벤트를 진행합니다. 2021년 8월 31일까지 진행되며, 카카오택시 앱에서 할인쿠폰을 받으세요.`,
        content: `카카오택시에서 50% 할인 이벤트를 진행합니다. 2021년 8월 31일까지 진행되며, 카카오택시 앱에서 할인쿠폰을 받으세요.`,
        source: ["https://www.kakaocorp.com/service/KakaoTaxi"]

    }


    const [dialog, setDialog] = useState(false);
    const openDialog = () => setDialog(true);
    const closeDialog = () => setDialog(false);

    return (
        <section className="container">
            <h1>게시물 승인/거부</h1>
            <div className="wait-header detail-header">
                <div className="wait-title">
                    <div>제목</div>
                    <div>{tempData.title}</div>
                </div>
                <div className="wait-author">
                    <div>작성자</div>
                    <div>{tempData.author}</div>
                </div>
                <div className="wait-category">
                    <div>카테고리</div>
                    <div>{tempData.category}</div>
                </div>
                <div className="wait-hashtag">
                    <div>해시태그</div>
                    <div>{tempData.hashTag.map((tag, index) => <span key={index}>{tag}</span>)}</div>
                </div>
                <div className="wait-img">
                    <div>대표사진</div>
                    <div><img src={tempData.img} alt="대표사진"/></div>
                </div>
            </div>

            <div className="wait-body detail-header">
                <div className="wait-introduction">
                    <div>소개글</div>
                    <div dangerouslySetInnerHTML={{ __html: tempData.introduction }} />
                </div>
                <div className="wait-content">
                    <div>내용</div>
                    <div dangerouslySetInnerHTML={{ __html: tempData.content }} />
                </div>
                <div className="wait-source">
                    <div>출처</div>
                    <div>{tempData.source.map((source, index) => <span key={index}>{source}</span>)}</div>
                </div>
            </div>

            <div className="wait-footer detail-footer">
                <button>승인하기</button>
                <button onClick={openDialog}>거부하기</button>
            </div>

            {dialog && <WaitDialog close={closeDialog} />}
        </section>
    )
};