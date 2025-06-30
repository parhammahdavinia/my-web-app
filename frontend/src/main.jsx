import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // مسیر درست فایل CSS
import AOS from "aos"; // وارد کردن AOS
import "aos/dist/aos.css"; // وارد کردن استایل AOS

// مقداردهی اولیه AOS
AOS.init({
  duration: 1000, // مدت زمان انیمیشن (میلی‌ثانیه)
  once: true, // انیمیشن فقط یک‌بار اجرا بشه
  easing: "ease-in-out", // نوع easing برای انیمیشن نرم‌تر
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
