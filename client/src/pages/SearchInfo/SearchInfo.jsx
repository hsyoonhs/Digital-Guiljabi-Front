import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { Category } from "./components/Category";
import { SeeMore } from "./components/SeeMore";
import axios from "axios";

export const SearchInfo = () => {
    const api_url = process.env.REACT_APP_API_URL;
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("POP");
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
                let apiUrl = `${api_url}/api/v1/boards?q=${searchText}&pageSize=10&page=1&sort=${sortBy}`;

                if (selectCategory) {
                    apiUrl = `${api_url}/api/v1/boards?categoryPk=${selectCategory}&q=${searchText}&pageSize=10&page=1&sort=${sortBy}`;
                }

                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const testDataFromServer = response.data;
                setFilteredPosts(testDataFromServer.list);
                setPosts(testDataFromServer.list);
            } catch (error) {
                console.error("Error : ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [searchText, sortBy, selectCategory]);

    const handleSearch = () => {
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filtered.length === 0) {
            setMatchPosts(true);
        } else {
            setMatchPosts(false);
        }
    };

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
                        <option value="POP">인기순</option>
                        <option value="NEW">최신순</option>
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
