import "./App.css";
import Home from "./Pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
