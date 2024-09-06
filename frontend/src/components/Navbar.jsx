import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[10%] bg-black bg-opacity-30 flex justify-end items-center font-semibold ">
        <div className=" h-full w-[17%] flex justify-around items-center">
          <div className="flex items-center justify-start cursor-pointer">
            <div
              className={`${
                true ? "text-white" : "text-gray-400"
              } text-sm font-semibold hover:text-white`}
            >
              Sign Up
            </div>
          </div>

          <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
{
  /* <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div> */
}
