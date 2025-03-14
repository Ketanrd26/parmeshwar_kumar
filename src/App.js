import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./comp/header/Header";
import Footer from "./comp/footer/Footer";
import Contact from "./pages/contact/Contact";
import BlogView from "./pages/blog-view/BlogView";
import ScrollToTop from "./other/ScrollToTop";
import ScrollToTopButton from "./other/ScrollToTopButton";
import Cookies from "./pages/cookies/Cookies";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ScrollToTop />
        <ScrollToTopButton /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog_detail" element={<BlogView />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
