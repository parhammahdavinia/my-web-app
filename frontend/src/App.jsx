// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./Pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
