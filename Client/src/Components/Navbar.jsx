import { Link } from "react-router-dom";
import { assets } from "../Assets/assets.js";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-22 sm:w-44 select-none" />
      </Link>
      <Link
        to={"/admin"}
        className="flex items-center gap-2 rounded-full px-10 py-2.5 bg-primary text-white text-sm cursor-pointer"
      >
        Login <img src={assets.arrow} alt="Arrow" className="w-3" />
      </Link>
    </div>
  );
};

export default Navbar;
