import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./comp/header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import ChooseUs from "./pages/whychooseus/ChooseUs";

function App() {
  return (
    <div className="App">
 
        <Header />
        <Home />
        <About />
        <ChooseUs />
        <Blog />
   
    </div>
  );
}

export default App;
