import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/home/Home.tsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default Routers;
