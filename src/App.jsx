import Footer from "./componants/footer";
import Nav from "./componants/navbar";
import Home from "./componants/Home";
import Education from "./componants/Education";
import Abt from "./componants/abt";
import Projects from "./componants/Projects";
import Exp from "./componants/Exp";

export default function App() {
  return (
    <>
      <Nav></Nav>
      <Home />
      <Abt></Abt>
      <Education />
      <Projects></Projects>
      <Exp></Exp>
      <Footer></Footer>
    </>
  );
}
