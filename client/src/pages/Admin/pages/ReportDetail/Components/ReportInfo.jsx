export const ReportInfo = ({ date, name, reason }) => {
    return (
        <div className="report-info">
            <div className="report-date">
                <div>신고일시 </div>
                <div>{date}</div>
            </div>
            <div className="report-name">
                <div>신고자 </div>
                <div>{name}</div>
            </div>
            <div className="report-reason">
                <div>신고사유 </div>
                <div>{reason}</div>
            </div>
        </div>
    )
};
