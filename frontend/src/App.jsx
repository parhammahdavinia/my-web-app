import Tools from "./Pages/Tools";
import ToolsBase64 from "./Pages/ToolsBase64";
import ToolsHashGenerator from "./Pages/ToolsHashGenerator";
import ToolsPasswordGenerator from "./Pages/ToolsPasswordGenerator";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Skills from "./Pages/Skills";
import Services from "./Pages/Services";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

const AppRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading spinner on initial load
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <PageTransition>
              <BlogDetail />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/tools"
          element={
            <PageTransition>
              <Tools />
            </PageTransition>
          }
        />
        <Route
          path="/tools/base64"
          element={
            <PageTransition>
              <ToolsBase64 />
            </PageTransition>
          }
        />
        <Route
          path="/tools/hash-generator"
          element={
            <PageTransition>
              <ToolsHashGenerator />
            </PageTransition>
          }
        />
        <Route
          path="/tools/password-generator"
          element={
            <PageTransition>
              <ToolsPasswordGenerator />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <LanguageProvider>
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <AppRoutes />
        <ScrollToTop />
      </Suspense>
    </Router>
  </LanguageProvider>
);

export default App;
