import logo from "./logo.svg";
import "./App.css";
import { DisplayCard } from "./components/DisplayCard";
import tom from "./img/majortom.png";

function App() {
  return (
    <div className="font-ubuntu">
      <DisplayCard picture={tom} tag="Space Oddity" />
    </div>
  );
}

export default App;
