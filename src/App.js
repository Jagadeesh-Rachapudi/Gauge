import logo from "./logo.svg";
import "./App.scss";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { BsWhatsapp } from "react-icons/bs";

function App() {
  return (
    <div className="body">
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="whatsapp-button">
        <a
          href="https://api.whatsapp.com/send?phone=1234567890" // Replace with your desired WhatsApp URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
