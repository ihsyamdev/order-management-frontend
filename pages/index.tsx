import React, { useState, useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';
import cookie from 'js-cookie';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';

const Home = () => {
  return (
    <DefaultLayout>
      <h1>Home画面です</h1>
    </DefaultLayout>
  )
//   const [accessToken, setAccessToken] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleLogin = (username: string, password: string) => {
//     // APIリクエストを行い、ログイン処理を実装する
//     // 以下はダミーの実装
//     const response = {
//       access_token: 'sample_access_token',
//       expires_in: 3600 // アクセストークンの有効期限 (秒)
//     };

//     setAccessToken(response.access_token);
//     cookie.set('access_token', response.access_token, { expires: response.expires_in });
//     setIsModalOpen(false); // ログイン成功時にモーダルを閉じる
//   };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleKeyPress = (e: { key: string; }) => {
//     if (e.key === 'Escape') {
//       handleCloseModal();
//     }
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.addEventListener('keydown', handleKeyPress);
//     }
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     }
//   }, [isModalOpen]);

//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={handleOpenModal}>Login</button>

//       {isModalOpen && (
//         <div className="overlay">
//           <div className="modal">
//             <div className="modal-content">
//               <LoginForm onLogin={handleOpenModal} />
//               <button onClick={handleCloseModal}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
// 　     <style jsx>{`
//         .overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .modal {
//           background-color: #fff;
//           padding: 20px;
//         }
//       `}</style>
//     </div>
//   );
};

export default Home;
