import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="bg-black container  p-7 md:py-44 text-white flex justify-center">
      <div className="w-[70%]  leading-loose">
        <h2 className="md:text-4xl text-2xl font-bold pb-2.5">
          <span className="text-[#8137db]">Welcome</span> to My Portfolio!
        </h2>

        <h3 className="font-bold md:text-lg text-sm pb-4">
          &#128075; Hello!{" "}
          <span className="text-[#8137db]">
            {" "}
            <span>
              <ReactTyped strings={["I’m Infant Ryan J"]} typeSpeed={70} />
            </span>{" "}
          </span>
          ,
        </h3>
        <p className="md:text-xl ">
          <span className="md:pl-16  font-semibold text-gray-500">
          Passionate computer science student with skills in programming and hardware interfacing, driven to create innovative solutions.
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
}
