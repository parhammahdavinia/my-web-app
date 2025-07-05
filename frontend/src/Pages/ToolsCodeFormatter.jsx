import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { HiCode, HiClipboard, HiDownload, HiRefresh } from "react-icons/hi";
// Using a simpler approach for code formatting

const ToolsCodeFormatter = () => {
  const { t, language } = useLanguage();
  const [code, setCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    { id: "javascript", name: "JavaScript", icon: "⚡" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "html", name: "HTML", icon: "🌐" },
    { id: "css", name: "CSS", icon: "🎨" },
    { id: "json", name: "JSON", icon: "📄" },
    { id: "php", name: "PHP", icon: "🐘" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "cpp", name: "C++", icon: "⚙️" },
  ];

  const formatCode = async () => {
    if (!code.trim()) return;

    setIsFormatting(true);

    try {
      let formatted = code;

      switch (selectedLanguage) {
        case "javascript":
          formatted = formatJavaScript(code);
          break;
        case "html":
          formatted = formatHTML(code);
          break;
        case "css":
          formatted = formatCSS(code);
          break;
        case "json":
          formatted = formatJSON(code);
          break;
        case "python":
          formatted = formatPython(code);
          break;
        case "php":
          formatted = formatPHP(code);
          break;
        case "java":
          formatted = formatJava(code);
          break;
        case "cpp":
          formatted = formatCpp(code);
          break;
        default:
          formatted = code;
      }

      setFormattedCode(formatted);
    } catch (error) {
      console.error("Formatting error:", error);
      setFormattedCode("Error formatting code. Please check your syntax.");
    } finally {
      setIsFormatting(false);
    }
  };

  const formatJavaScript = (code) => {
    // Enhanced JavaScript formatting
    return code
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s*\(\s*/g, "(")
      .replace(/\s*\)\s*/g, ")")
      .replace(/\n\s*\n/g, "\n")
      .replace(/\n\s*}/g, "\n}")
      .trim();
  };

  const formatPython = (code) => {
    // Basic Python formatting
    return code
      .replace(/\s*:\s*/g, ":\n  ")
      .replace(/\n\s*\n/g, "\n")
      .trim();
  };

  const formatHTML = (code) => {
    // Enhanced HTML formatting
    return code
      .replace(/>\s*</g, ">\n<")
      .replace(/\s*\/>\s*/g, " />\n")
      .replace(/\n\s*\n/g, "\n")
      .replace(/\n\s*</g, "\n<")
      .trim();
  };

  const formatCSS = (code) => {
    // Enhanced CSS formatting
    return code
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\s*:\s*/g, ": ")
      .replace(/\n\s*\n/g, "\n")
      .replace(/\n\s*}/g, "\n}")
      .trim();
  };

  const formatJSON = (code) => {
    try {
      const parsed = JSON.parse(code);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return "Invalid JSON format";
    }
  };

  const formatPHP = (code) => {
    // Basic PHP formatting
    return code
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\n\s*\n/g, "\n")
      .trim();
  };

  const formatJava = (code) => {
    // Basic Java formatting
    return code
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\n\s*\n/g, "\n")
      .trim();
  };

  const formatCpp = (code) => {
    // Basic C++ formatting
    return code
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      .replace(/\n\s*\n/g, "\n")
      .trim();
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([formattedCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `formatted-code.${getFileExtension(selectedLanguage)}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFileExtension = (lang) => {
    const extensions = {
      javascript: "js",
      python: "py",
      html: "html",
      css: "css",
      json: "json",
      php: "php",
      java: "java",
      cpp: "cpp",
    };
    return extensions[lang] || "txt";
  };

  const clearCode = () => {
    setCode("");
    setFormattedCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white vazir">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            {language === "fa" ? "فرمت‌کننده کد" : "Code Formatter"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {language === "fa"
              ? "کد خود را به صورت خودکار فرمت کنید و خوانایی آن را بهبود دهید"
              : "Automatically format your code and improve its readability"}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {language === "fa" ? "کد ورودی" : "Input Code"}
              </h2>
              <button
                onClick={clearCode}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                <HiRefresh size={16} />
                {language === "fa" ? "پاک کردن" : "Clear"}
              </button>
            </div>

            {/* Language Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa"
                  ? "زبان برنامه‌نویسی"
                  : "Programming Language"}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.icon} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Code Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "کد خود را وارد کنید" : "Enter your code"}
              </label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={
                  language === "fa"
                    ? "کد خود را اینجا وارد کنید..."
                    : "Enter your code here..."
                }
                className="w-full h-64 bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none"
              />
            </div>

            {/* Format Button */}
            <button
              onClick={formatCode}
              disabled={!code.trim() || isFormatting}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <HiCode size={20} />
              {isFormatting
                ? language === "fa"
                  ? "در حال فرمت کردن..."
                  : "Formatting..."
                : language === "fa"
                  ? "فرمت کردن کد"
                  : "Format Code"}
            </button>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {language === "fa" ? "کد فرمت شده" : "Formatted Code"}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => copyToClipboard(formattedCode)}
                  disabled={!formattedCode}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  <HiClipboard size={16} />
                  {copied
                    ? language === "fa"
                      ? "کپی شد!"
                      : "Copied!"
                    : language === "fa"
                      ? "کپی"
                      : "Copy"}
                </button>
                <button
                  onClick={downloadCode}
                  disabled={!formattedCode}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  <HiDownload size={16} />
                  {language === "fa" ? "دانلود" : "Download"}
                </button>
              </div>
            </div>

            {/* Formatted Code Output */}
            <div className="bg-gray-900 border border-gray-600 rounded-lg p-4 h-64 overflow-auto">
              {formattedCode ? (
                <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                  {formattedCode}
                </pre>
              ) : (
                <div className="text-gray-400 text-center py-20">
                  {language === "fa"
                    ? "کد فرمت شده اینجا نمایش داده خواهد شد"
                    : "Formatted code will appear here"}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "fa" ? "ویژگی‌های ابزار" : "Tool Features"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "سریع و آسان" : "Fast & Easy"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "فرمت کردن کد در چند ثانیه"
                  : "Format code in seconds"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "چندین زبان" : "Multiple Languages"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "پشتیبانی از زبان‌های برنامه‌نویسی مختلف"
                  : "Support for multiple programming languages"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "دانلود و کپی" : "Download & Copy"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "کپی کردن یا دانلود کد فرمت شده"
                  : "Copy or download formatted code"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsCodeFormatter;
