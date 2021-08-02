import "./App.css";
import { NavBar } from "./components/NavBar";
import { Introduction } from "./components/Introduction";
import { OverView } from "./components/OverView";
import { OurServices } from "../src/components/ourServices";
import { Card } from "@material-ui/core";
function App() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <OverView />
      <OurServices />
    </div>
  );
}

export default App;
