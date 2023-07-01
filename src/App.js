import logo from "./logo.svg";
// import './App.css';

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import FetchApi from "./Components/FetchApi";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/general" element = {<FetchApi cat = "general" />}/>
          <Route exact path="/business" element = {<FetchApi cat = "business" />}/>
          <Route exact path="/entertainment" element = {<FetchApi cat = "entertainment" />}/>
          <Route exact path="/health" element = {<FetchApi cat = "health" />}/>
          <Route exact path="/science" element = {<FetchApi cat = "science" />}/>
          <Route exact path="/sports" element = {<FetchApi cat = "sports" />}/>
          <Route exact path="/technology" element = {<FetchApi cat = "technology" />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
