import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Maingame from "./Components/Maingame";
import Topbar from "./Components/Topbar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import About from "./Components/About";
import Profile from "./Components/ProfilePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
          <Routes>
          <Route path="/" element= {<Maingame />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
