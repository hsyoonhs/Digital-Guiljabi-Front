import { useState } from "react";

export const Request = () => {
    const [selectedOption, setSelectedOption] = useState("report");
    const [showReportOptions, setShowReportOptions] = useState(true);
    const [reason, setReason] = useState("");

    const optionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === "report") {
            setShowReportOptions(true);
        } else {
            setShowReportOptions(false);
        }
    };

    const reasonChange = (e) => {
        setReason(e.target.value);
    };

    const submitReason = () => {
        alert("제출 성공");
    };

    return (
        <div>
            <h1>Request</h1>
            <label>
                <input
                    type="radio"
                    value="report"
                    checked={selectedOption === "report"}
                    onChange={optionChange}
                />
                신고
            </label>
            <label>
                <input
                    type="radio"
                    value="modify"
                    checked={selectedOption === "modify"}
                    onChange={optionChange}
                />
                수정
            </label>

            {selectedOption === "report" && showReportOptions && (
                <div>
                    <label>
                        <input type="radio" value="option1" />
                        내용 불일치
                    </label>
                    <label>
                        <input type="radio" value="option2" />
                        저작권 침해
                    </label>
                    <label>
                        <input type="radio" value="option3" />
                        유해, 광고성
                    </label>
                    <label>
                        <input type="radio" value="option4" />
                        기타
                    </label>
                </div>
            )}
            <br></br>
            <textarea
                value={reason}
                onChange={reasonChange}
                placeholder="해당 요청 사유를 입력하세요"
                rows={4}
                cols={50}
            />
            <br></br>
            <button onClick={submitReason}>제출</button>
        </div>
    );
};
