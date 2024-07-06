import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/";

const RootLayout = () => {
  
  return (
    <>
      <div className="w-full">
        <Topbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;