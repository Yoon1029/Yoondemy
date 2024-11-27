// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // useAuth 훅을 사용하여 로그인 여부 확인

// const ProtectedRoute = ({ children }) => {
//     const { isAuthenticated } = useAuth(); // 로그인 여부 확인

//     if (!isAuthenticated) {
//         // 로그인 안 되어 있으면 /login으로 리다이렉트
//         return <Navigate to="/login" />;
//     }

//     return children; // 로그인 되어 있으면 페이지 렌더링
// };

// export default ProtectedRoute;
