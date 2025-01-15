
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Header from './comp/header/Header';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
