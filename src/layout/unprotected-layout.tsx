import { Outlet } from "react-router-dom";

const UnprotectedLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default UnprotectedLayout;
