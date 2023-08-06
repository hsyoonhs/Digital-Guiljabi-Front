import { useState, useEffect } from "react";
import axios from "axios";

export const usePosts = (type, parameters = {}) => {
    const api = process.env.REACT_APP_API_URL;
    const [posts, setPosts] = useState([]);

    // 날짜 데이터 이름이 다르기 때문에 통일시켜주는 함수
    
    const parseDate = (data) => {
        const fillZero = (num) => {
            return num < 10 ? `0${num}` : num;
        }
        const dateLoader = () => {
            if (type == "boards/waiting") {
                return data.updateAt;
            }
            else if (type == "edit-requests") {
                return data.createAt;
            }
            else if (type == "boards/top-reported") {
                return data.recentReportAt;
            }
        }
        

        let date = new Date(dateLoader());
        const year = date.getFullYear();
        const month = fillZero(date.getMonth() + 1);
        const day = fillZero(date.getDate());
        const hours = fillZero(date.getHours());
        const minutes = fillZero(date.getMinutes());
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    const parseRemark = (data) => {
        if (type === "boards/top-reported") {
            return data.reportCnt;
        }
        else {
            return "-";
        }
    }

    const parsePk = (data) => {
        if (type === "boards/waiting") {
            return data.boardPk;
        }
        else if (type === "edit-requests") {
            return data.editRequestPk;
        }
        else if (type === "boards/top-reported") {
            return data.boardPk;
        }
    }

    const parseData = (data) => {
        
        const result = data.map((item) => {
            return {
                date: parseDate(item),
                title: item.title,
                author: "홍길동",
                remark: parseRemark(item),
                pk : parsePk(item)
            }
        });
        return result;
    }

    const constructUrl = (parameters) => {
        let url = `${api}/api/v1/admin/${type}?`;
        for (let key in parameters) {
            url += `${key}=${parameters[key]}&`;
        }
        return url;
    }

    useEffect(() => {
        axios.get(constructUrl(parameters), {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                const data = res.data.list;
                const result = parseData(data);
                setPosts(result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [parameters]);

    return posts;
}