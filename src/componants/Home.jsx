import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="container bg-black text-gray-300 md:p-56 border-b border-gray-600">
      <div className="font-semibold">
        <h1 className="text-4xl pb-3.5">
          <ReactTyped
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text"
            strings={[
              "Welcome!",
              "¡Hola!",
              "Bonjour!",
              "Guten Tag!",
              "こんにちは",
              "你好",
              "नमस्ते",
              "مرحبا",
              "Привет",
              "Ciao!",
              "안녕하세요",
              "Jambo!",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />{" "}
          to my portfolio
        </h1>
        <h2 className="text-2xl pb-4"> &#x1F44B; hi I am Infant Ryan J. ,</h2>
      </div>
      <div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          repellendus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nisi sed ab dolore nostrum laboriosam magnam blanditiis vel
          praesentium iure aliquam! Provident reiciendis nobis facilis
          similique!
        </p>
      </div>
    </div>
  );
}
