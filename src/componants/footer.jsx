import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-black p-7 container">
      <div className="flex space-x-5 mb-3.5 text-white justify-center text-xl">
        <a href="https://www.instagram.com/infantryan89/" target="_blank"  className="hover:text-[#09ebdf]"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/infant-ryan/" target="_blank"  className="hover:text-[#09ebdf]"><FaLinkedinIn /></a>
        <a href="https://github.com/INFANT-RYAN" target="_blank"  className="hover:text-[#09ebdf]"><FaGithub /></a>
      </div>
      <div className="flex  justify-center text-white">
        <p>
          {" "}
          <span className="text-[#8137db]">Designed</span> and{" "}
          <span className="text-[#8137db]">built</span> by <br />
          <center>Infant Ryan J</center>
        </p>
      </div>
    </div>
  );
}
