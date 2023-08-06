export const Title = ({ nextStep }) => {



    return (
        <div className="title">
            <div><input placeholder="제목을 입력해주세요." /></div>
            <div><input placeholder="서론(소개말) 입력" /></div>
            <div><input type="file" /></div>

            <div>
                <button onClick={nextStep}>다음 단계로</button>
            </div>
        </div>
    )
}