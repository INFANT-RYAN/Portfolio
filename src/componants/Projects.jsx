import { BsTools } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="bg-black md:p-56  border-b border-gray-600">
      <div className="flex items-center gap-3 text-4xl text-white font-semibold">
        <BsTools className="text-purple-400" />
        <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text">
          Projects
        </h2>
      </div>
    </div>
  );
}
