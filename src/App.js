import "./App.css";
import { NavBar } from "./components/NavBar";
import { Introduction } from "./components/Introduction";
import { OverView } from "./components/OverView";
import { OurServices } from "../src/components/ourServices";
import { Offer } from "./components/offer";
import { ChooseUs } from "./components/chooseUs";

function App() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <OverView />
      <OurServices />
      <Offer />
      <ChooseUs />
    </div>
  );
}

export default App;
