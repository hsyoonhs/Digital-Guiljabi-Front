export const PostTable = ({ type, data }) => {
    return (
        <table className="post-table">
            <thead>
                <tr>
                    <th>{type} 일시</th>
                    <th>글쓴이</th>
                    <th>제목</th>
                    <th>비고</th>
                </tr>
            </thead>

            <tbody>
                {data.map((post, index) => {
                    return (
                        <tr key={index}>
                            <td>{post.date}</td>
                            <td>{post.author}</td>
                            <td>{post.title}</td>
                            <td>{post.remark}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}