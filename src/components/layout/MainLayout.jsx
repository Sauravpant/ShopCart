import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const MainLayout = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
};
