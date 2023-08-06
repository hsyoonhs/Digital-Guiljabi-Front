import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { Category } from "./components/Category";
import { SeeMore } from "./components/SeeMore";
import axios from "axios";

export const SearchInfo = () => {
    const api_url = process.env.REACT_APP_API_URL;
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [matchPosts, setMatchPosts] = useState(false);
    const [selectCategory, setSelectCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const searchChange = (e) => {
        setSearchText(e.target.value);
    };

    const sortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectCategory(category);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${api_url}/api/v1/boards/`, {
                    header: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const testDataFromServer = response.data;
                setFilteredPosts(testDataFromServer);
            } catch (error) {
                console.error("Error : ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleSearch = () => {
        const filtered = posts.filter((post) =>
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
        let filtered = posts;
        if (selectCategory) {
            filtered = posts.filter((post) => post.category === selectCategory);
        }
        sortPosts(filtered, sortBy);
    }, [sortBy, selectCategory, posts]);

    if (loading) {
        return <p>로딩중입니다.</p>;
    }

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
            <Category handleCategoryChange={handleCategoryChange} />
            {matchPosts ? (
                <p>일치하는 게시물이 없습니다.</p>
            ) : (
                <PostList posts={filteredPosts} />
            )}
            <SeeMore />
            <button>글 작성</button>
        </div>
    );
};

// page 매기는거 추가할 것
