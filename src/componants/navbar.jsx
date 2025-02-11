export default function Nav() {
  return (
    <div className="bg-black p-6 flex justify-between px-8 container">
      <div></div>
      <nav>
        <ul className="flex space-x-4 text-white ">
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
      </nav>
    </div>
  );
}
