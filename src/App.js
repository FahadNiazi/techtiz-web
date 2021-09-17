import "./App.css";

import { ContactUs } from "./components/contactUs/contactUs";
import { Footer } from "./components/Footer/Footer";
import { PrivacyPolocy } from "./components/privacyPolicy";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <ContactUs />
      <Footer />
      <PrivacyPolocy />
    </div>
  );
}

export default App;
