import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"


export const Login = () => {


    const getLogin = async () => {
        const api_url = process.env.REACT_APP_API_URL;
        try {
            const response = await axios.get(`${api_url}/api/auth/kakao/login-url`);
            let kakaoUrl = response.data.loginUrl;
            console.log("kakaoUrl: ", kakaoUrl);
            kakaoUrl += "&redirect_uri=http://localhost:3000&response_type=code";

            window.location.href = kakaoUrl;
        } catch (error) {
            console.error("Error 발생 (로그인): ", error);
        }
    };


    return (
        <>
            <h1>Login</h1>
            <div className="login-section">
                <div className="kakao-login">
                    <img onClick={getLogin} src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png" alt="카카오 로그인 버튼" />
                </div>
            </div>
        </>
    )
}