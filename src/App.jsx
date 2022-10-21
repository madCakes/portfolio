import { useState } from "react";
import { About, Navbar, Projects, Project, Footer } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
