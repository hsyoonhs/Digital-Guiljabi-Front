export const WaitDialog = ({close}) => {
    return (
        <section className="dialog-section">
            <div className="dialog">
                <div className="dialog-close" onClick={close}>
                    ✕
                </div>
                <div className="dialog-header">
                    거부 사유 입력
                </div>
                <div className="dialog-body">
                    <textarea placeholder="거부 사유를 입력해주세요." />
                </div>
                <div className="dialog-footer detail-footer">
                    <button onClick={close}>확인</button>
                </div>
            </div>
        </section>
    )
}