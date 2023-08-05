export const EditDialog = ({close}) => {
    return (
        <section className="dialog-section">
            <div className="dialog">
                <div className="dialog-close" onClick={close}>
                    ✕
                </div>
                <div className="dialog-header">
                    수정 요청 사항 입력
                </div>
                <div className="dialog-body">
                    <textarea placeholder="수정 요청 사항을 입력해주세요." />
                </div>
                <div className="dialog-footer detail-footer">
                    <button onClick={close}>게시글 숨기지 않기</button>
                    <button onClick={close}>게시글 숨기기</button>
                </div>
            </div>
        </section>
    )
}