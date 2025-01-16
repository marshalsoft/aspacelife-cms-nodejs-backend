import Navbar from "../components/navBar";
import Sidebar from "../components/sidebar";
import { ROUTES } from "../utils/constant";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div >
        <Navbar 
        navList={[
            {title:"ABAALY",route:ROUTES.Abaaly,},
            {title:"ASPACELIFETECH",route:ROUTES.AspaceLife},
            {title:"ABAATECHNOLOGY SOLUTIONS",route:ROUTES.AbaaTech},
            {title:"ABAARIDE",route:ROUTES.AbaaRide},
        ]}
        />
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow p-8 bg-gray-100">
        {children}
      </div>
    </div>
    </div>
  );
};

export default Layout;