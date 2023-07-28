import { Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
