import { MdMenu } from "react-icons/md";

export default function Nav() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 container max-[100%]:] border-b border-gray-600">
      <div className=" flex justify-between px-8 ">
        <div></div>
        <nav>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-white  ">
              <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
                <a href="#">About</a>
              </li>
              <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
                <a href="#">Education</a>
              </li>
              <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
                <a href="#">Project</a>
              </li>
              <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
                <a href="#">Experience</a>
              </li>
            </ul>
          </div>
          <div className="text-white md:hidden text-2xl menu-ico">
            <MdMenu />
          </div>
        </nav>
      </div>
      <div className="md:hidden mob-menu">
        <ul className="flex flex-col items-center space-x-4 text-white  ">
          <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
            <a href="#">Education</a>
          </li>
          <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
            <a href="#">Project</a>
          </li>
          <li className="hover:text-[#09ebdf] text-gray-300 font-semibold">
            <a href="#">Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
