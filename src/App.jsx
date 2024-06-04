import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Maingame from "./Components/Maingame";
import Topbar from "./Components/Topbar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
          <Routes>
          <Route path="/" element= {<Maingame />}/>
          <Route path="/signout" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
