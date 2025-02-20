import { Link } from "react-router-dom";

// Icons
import { RxDashboard } from "react-icons/rx";
import { RiPlantLine } from "react-icons/ri";
import { PiDeviceTabletSpeakerLight } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { MdReportGmailerrorred } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { ReactComponent as Logo } from "../assets/image/growvanta.svg";

// Dummy User
const user = {
  name: "John Doe",
  role: "Administrator",
  avatar: "https://via.placeholder.com/40",
};

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen p-4 flex flex-col justify-between text-black">
      {/* Logo Growvanta */}
      <div className="bg-[#223F3F] p-4 rounded-lg flex items-center justify-center">
        {/* <Logo className="bg-green-100" /> */}
        <h2 className="text-white font-bold text-xl ml-2">
          <span className="text-green-500 font-serif text-2xl">G</span>rowvanta
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul className="flex flex-col gap-4">
          <li className="py-3 px-4 hover:bg-green-800 rounded cursor-pointer flex items-center gap-3">
            <RxDashboard className="h-8 w-8"/>
            Dashboard
          </li>
          <Link to={"/my-garden"}>
            <li className="py-3 px-4 hover:bg-green-800 rounded cursor-pointer flex items-center gap-3">
              <RiPlantLine className="h-8 w-8"/>
              My Garden
            </li>
          </Link>
          <li className="py-3 px-4 hover:bg-green-700 rounded cursor-pointer flex items-center gap-3">
            <PiDeviceTabletSpeakerLight className="h-8 w-8"/>
            Device
          </li>
          <li className="py-3 px-4 hover:bg-green-700 rounded cursor-pointer flex items-center gap-3">
            <RiCustomerService2Line className="h-8 w-8"/>
            Customer Service
          </li>
          <li className="py-3 px-4 hover:bg-green-700 rounded cursor-pointer flex items-center gap-3">
            <AiOutlineProduct className="h-8 w-8"/>
            Product
          </li>
          <li className="py-3 px-4 hover:bg-green-700 rounded cursor-pointer flex items-center gap-3">
            <MdReportGmailerrorred className="h-8 w-8"/>
            Report
          </li>
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="border-t pt-4">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-bold">{user.name}</h3>
            <p className="text-xs text-gray-500">{user.role}</p>
          </div>
        </div>
        <button className="mt-3 w-full flex items-center gap-2 justify-center py-2 bg-red-500 text-white rounded hover:bg-red-600">
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}
