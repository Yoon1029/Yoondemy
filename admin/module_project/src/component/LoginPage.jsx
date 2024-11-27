import { Component } from "react";
import './LoginPage.css';
import { Link, useNavigate } from "react-router-dom";

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        isValid: false
    };
    

    changeUsername = (e) => this.setState({ username: e.target.value });
    changePassword = (e) => this.setState({ password: e.target.value });

    checkLogin = () => {
        const { username, password } = this.state;
        if (username === "admin" && password === "0000") {
            this.setState({ isValid: true });
            alert("로그인되었습니다!");
            this.props.navigate("/admin");
        } else {
            this.setState({ isValid: false });
            alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            this.myinput.focus();
        }
    };

    render() {
        return (
            <div className="login-container">
                <h2 className="login-title">Admin 로그인 페이지</h2>
                <input
                    ref={x => this.myinput = x}
                    type="text"
                    value={this.state.username}
                    onChange={this.changeUsername}
                    placeholder="아이디를 입력하세요"
                    className="login-input"
                />
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.changePassword}
                    placeholder="비밀번호를 입력하세요"
                    className="login-input"
                />
                <button onClick={this.checkLogin} className="login-button">
                    로그인
                </button>
            </div>
        );
    }
}


export default function LoginPageWrapper() {
    const navigate = useNavigate();
    return <LoginPage navigate={navigate} />;
}

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // useAuth 훅 사용

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth(); // login 함수 사용

//     const handleLogin = () => {
//         if (username === 'admin' && password === '0000') {
//             login(); // 로그인 성공 시 로그인 상태 변경
//             alert('로그인되었습니다!');
//             navigate('/admin'); // 로그인 후 관리자 페이지로 이동
//         } else {
//             alert('아이디 또는 비밀번호가 잘못되었습니다.');
//         }
//     };

//     return (
//         <div>
//             <h2>로그인</h2>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="아이디"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="비밀번호"
//             />
//             <button onClick={handleLogin}>로그인</button>
//         </div>
//     );
// };

// export default LoginPage;
