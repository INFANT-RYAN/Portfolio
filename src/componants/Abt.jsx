import { MdPermIdentity } from "react-icons/md";

export default function Abt() {
  return (
    <div className="bg-black  p-56  border-b border-gray-600">
      <div className="flex items-center gap-3 text-4xl text-white font-semibold ">
        <MdPermIdentity className="text-purple-400" />
        <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text">
          About me
        </h2>
      </div>
    </div>
  );
}
