import { Outlet } from "react-router";

import Header from "../component/Header";

function Layout() {
  return (
    <div className="bg-blue-950 flex flex-col text-white  gap-[1.5rem] p-[2rem]  min-h-[100vh] select-none">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
