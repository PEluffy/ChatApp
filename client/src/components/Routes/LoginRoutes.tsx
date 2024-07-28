import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";
import Chat from "../Chat/Chat";
import { Error } from "../ErrorPage/Error";

export function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
