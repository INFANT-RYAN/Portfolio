import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="bg-black container mx-[100] p-7 text-white flex justify-center">
      <div className="w-[70%] leading-loose">
        <h2 className="text-4xl font-bold pb-2.5">
          <span className="text-[#8137db]">Welcome</span> to My Portfolio!
        </h2>

        <h3 className="font-semibold text-lg pb-4">
          &#128075; Hello!{" "}
          <span className="text-[#8137db]">
            {" "}
            <span>
              <ReactTyped strings={["I’m Infant Ryan J"]} typeSpeed={70} />
            </span>{" "}
          </span>
          ,
        </h3>
        <p className="text-xl">
          <span className="pl-16">
            A passionate and dedicated computer science student at St Joseph's
            College (Autonomous), Tiruchirapalli, expected to graduate in May
            2025. With a solid foundation in programming and hardware
            interfacing, I am driven by the desire to build innovative solutions
            and make a positive impact.
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
}
