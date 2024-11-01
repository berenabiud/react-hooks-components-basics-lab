import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link </a>
     
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// Define the About component
function About() {
  return (
    <div id="about">
      <h1>About</h1>
     
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />  {/* Add the Home component here */}
      <About /> {/* Add the About component here */}
    </div>
  );
}

export default App;
