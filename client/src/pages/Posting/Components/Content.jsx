export const Content = ({ no }) => {
    return (
        <div>
            <div className="content-header">
                <h1>{no}</h1>
                <input placeholder="제목을 입력해주세요." />
                <input type="file" />
            </div>

            <div className="content-body">
                <textarea />
            </div>

            <div className="content-footer">
                <button>뒤로</button>
                <button>다음</button>
                <button>단계 추가</button>
                <button>다음 단계로</button>
            </div>

        </div>
    )
}