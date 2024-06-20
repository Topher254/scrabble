import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Maingame from "./Components/Maingame";
import Topbar from "./Components/Topbar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import About from "./Components/About";
import AddPlayer from "../AddPlayer"; // Ensure this import path is correct

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Maingame />} />
          <Route path="/signout" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/logged" element={<Maingame />} />
          <Route path="/add-player" element={<AddPlayer />} /> {/* New route for adding players */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
