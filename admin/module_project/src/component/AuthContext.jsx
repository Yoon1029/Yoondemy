// // src/AuthContext.js
// import React, { createContext, useState, useContext } from 'react';

// // 로그인 상태를 관리할 Context 생성
// export const AuthContext = createContext();

// // AuthProvider 컴포넌트
// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => setIsAuthenticated(true);
//     const logout = () => setIsAuthenticated(false);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // useAuth custom hook 추가
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
