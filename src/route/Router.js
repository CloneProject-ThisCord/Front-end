import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Chat from "../pages/Chat";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<div>이거 404 페이지요</div>} />
    </Routes>
  );
};

export default Router;
