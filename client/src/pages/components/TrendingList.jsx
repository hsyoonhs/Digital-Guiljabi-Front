import { Link } from "react-router-dom";

export default function TrendingList({ trendingData }) {
    return (
        <div>
            {trendingData.map((item, index) => (
                <div key={index}>
                    <span>Category: {item.category}</span>
                    <Link to={`/detailinfo?id=${item.id}`}>
                        <h3>{item.title}</h3>
                    </Link>
                    <p>{item.description}</p>
                    <span>Likes: {item.likes}</span>
                </div>
            ))}
        </div>
    );
}
