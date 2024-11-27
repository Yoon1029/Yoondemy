import React from "react";
import { Link } from "react-router-dom";
import './AdminPage.css';

function AdminPage() {
    return (
        <div className="admin">
            <h1>Admin 페이지</h1>
            <p>관리자 권한으로 로그인되었습니다.</p>
            {/* 로그아웃 버튼 */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="logout-button">
                    로그아웃
                </button>
            </Link>
        </div>
    );
}

export default AdminPage;

// import React from 'react';
// import { useAuth } from './AuthContext'; // useAuth 훅 사용
// import { Link } from "react-router-dom";
// import './AdminPage.css';

// const AdminPage = () => {
//     const { logout } = useAuth(); // 로그아웃 함수

//     const handleLogout = () => {
//         logout(); // 로그아웃 후 /login 페이지로 이동
//     };

//     return (
//         <div>
//             <h2>관리자 페이지</h2>
//             <button onClick={handleLogout}>로그아웃</button>
//         </div>
//     );
// };

// export default AdminPage;

