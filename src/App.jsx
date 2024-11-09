import "./App.css";
import Slidebar from "./components/SlideBar/SlideBar";
import Dasboard from "./modules/Dasboard/Dasboard";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column-reverse" }}
    >
      <Slidebar />
      <Dasboard />
    </div>
  );
}

export default App;
