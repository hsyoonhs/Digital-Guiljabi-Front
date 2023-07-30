import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";

export const SearchInfo = () => {
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [matchPosts, setMatchPosts] = useState(false);

    const searchChange = (e) => {
        setSearchText(e.target.value);
    };

    const sortChange = (e) => {
        setSortBy(e.target.value);
    };

    const testData = [
        {
            id: 1,
            title: "Post 1",
            likes: 10,
            bookmarks: 5,
            date: "2023-07-01",
            comment: "궁금하면 들어와!",
        },
        {
            id: 2,
            title: "Post 3",
            likes: 5,
            bookmarks: 2,
            date: "2023-07-03",
            comment: "이거 정말 엄청난 정보입니다!",
        },
        {
            id: 3,
            title: "Post 2",
            likes: 15,
            bookmarks: 7,
            date: "2023-07-02",
            comment: "이 이야기는 블라블라",
        },
    ];

    const handleSearch = () => {
        const filtered = testData.filter((post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filtered.length === 0) {
            setMatchPosts(true);
        } else {
            setMatchPosts(false);
            sortPosts(filtered, sortBy);
        }
    };

    const sortPosts = (posts, sortOption) => {
        const sorted = [...posts];
        if (sortOption === "newest") {
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortOption === "popular") {
            sorted.sort((a, b) => b.likes - a.likes);
        }
        setFilteredPosts(sorted);
    };

    useEffect(() => {
        sortPosts(filteredPosts, sortBy);
    }, [sortBy, filteredPosts]);

    return (
        <div>
            <h1>Search</h1>
            <div>
                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={searchText}
                    onChange={searchChange}
                />
                <button onClick={handleSearch}>검색</button>
                <label>
                    <select value={sortBy} onChange={sortChange}>
                        <option value="popular">인기순</option>
                        <option value="newest">최신순</option>
                    </select>
                </label>
            </div>
            {matchPosts ? (
                <p>일치하는 게시물이 없습니다.</p>
            ) : (
                <PostList posts={filteredPosts} />
            )}
            <button>글 작성</button>
        </div>
    );
};

// page 매기는거 추가할 것
