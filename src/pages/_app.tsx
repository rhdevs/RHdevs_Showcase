import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
export default function Example() {
  return (
    <div className="sm:max-h-full sm:max-w-screen flex min-h-screen flex-col dark:bg-black justify-between">
      <Navbar />
      <div className="flex mx-10 sm:mx-auto grow max-w-3xl md:w-screen">
        <Outlet />
      </div>
    </div>
  );
}
