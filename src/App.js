import "./App.css";
import { DisplayCard } from "./components/DisplayCard";
import tom from "./img/majortom.png";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-ubuntu ">
      <div className="max-w-7xl">
        <div className="font-ubuntu flex flex-row flex-wrap justify-center items-center -m-4 pb-12 ">
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
          <DisplayCard picture={tom} tag="Space Oddity" />
        </div>
      </div>
    </div>
  );
}

export default App;
