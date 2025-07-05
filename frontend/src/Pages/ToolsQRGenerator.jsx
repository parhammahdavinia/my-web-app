import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { HiQrcode, HiDownload, HiRefresh, HiClipboard } from "react-icons/hi";
import QRCode from "qrcode";

const ToolsQRGenerator = () => {
  const { t, language } = useLanguage();
  const [text, setText] = useState("");
  const [qrSize, setQrSize] = useState(200);
  const [qrColor, setQrColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [errorCorrection, setErrorCorrection] = useState("M");
  const [generatedQR, setGeneratedQR] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef(null);

  const errorCorrectionLevels = [
    { value: "L", name: language === "fa" ? "کم (7%)" : "Low (7%)" },
    { value: "M", name: language === "fa" ? "متوسط (15%)" : "Medium (15%)" },
    { value: "Q", name: language === "fa" ? "بالا (25%)" : "High (25%)" },
    {
      value: "H",
      name: language === "fa" ? "بسیار بالا (30%)" : "Very High (30%)",
    },
  ];

  const generateQR = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);

    try {
      const options = {
        errorCorrectionLevel: errorCorrection,
        type: "image/png",
        quality: 0.92,
        margin: 1,
        color: {
          dark: qrColor,
          light: bgColor,
        },
        width: qrSize,
      };

      const qrDataURL = await QRCode.toDataURL(text, options);
      setGeneratedQR(qrDataURL);
    } catch (error) {
      console.error("QR generation error:", error);
      setGeneratedQR("");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    if (!generatedQR) return;

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = generatedQR;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = async () => {
    if (!generatedQR) return;

    try {
      const response = await fetch(generatedQR);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      // Show success message
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const clearAll = () => {
    setText("");
    setQrSize(200);
    setQrColor("#000000");
    setBgColor("#FFFFFF");
    setErrorCorrection("M");
    setGeneratedQR("");
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
            {language === "fa" ? "تولیدکننده QR کد" : "QR Code Generator"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {language === "fa"
              ? "QR کد سفارشی برای لینک‌ها، متن و اطلاعات خود ایجاد کنید"
              : "Create custom QR codes for your links, text, and information"}
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
                {language === "fa" ? "تنظیمات QR کد" : "QR Code Settings"}
              </h2>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                <HiRefresh size={16} />
                {language === "fa" ? "پاک کردن" : "Clear"}
              </button>
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "متن یا لینک" : "Text or URL"}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={
                  language === "fa"
                    ? "متن، لینک یا اطلاعات خود را وارد کنید..."
                    : "Enter your text, URL, or information..."
                }
                className="w-full h-32 bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Size Slider */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "اندازه QR کد" : "QR Code Size"}: {qrSize}
                px
              </label>
              <input
                type="range"
                min="100"
                max="400"
                value={qrSize}
                onChange={(e) => setQrSize(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Colors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {language === "fa" ? "رنگ QR کد" : "QR Code Color"}
                </label>
                <input
                  type="color"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className="w-full h-10 bg-gray-900 border border-gray-600 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {language === "fa" ? "رنگ پس‌زمینه" : "Background Color"}
                </label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-10 bg-gray-900 border border-gray-600 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Error Correction */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "سطح تصحیح خطا" : "Error Correction Level"}
              </label>
              <select
                value={errorCorrection}
                onChange={(e) => setErrorCorrection(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {errorCorrectionLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateQR}
              disabled={!text.trim() || isGenerating}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <HiQrcode size={20} />
              {isGenerating
                ? language === "fa"
                  ? "در حال تولید..."
                  : "Generating..."
                : language === "fa"
                  ? "تولید QR کد"
                  : "Generate QR Code"}
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
                {language === "fa" ? "QR کد تولید شده" : "Generated QR Code"}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!generatedQR}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  <HiClipboard size={16} />
                  {language === "fa" ? "کپی" : "Copy"}
                </button>
                <button
                  onClick={downloadQR}
                  disabled={!generatedQR}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  <HiDownload size={16} />
                  {language === "fa" ? "دانلود" : "Download"}
                </button>
              </div>
            </div>

            {/* QR Code Display */}
            <div className="flex justify-center items-center bg-white rounded-lg p-8 min-h-[300px]">
              {generatedQR ? (
                <img
                  src={generatedQR}
                  alt="Generated QR Code"
                  className="max-w-full h-auto"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <HiQrcode size={64} className="mx-auto mb-4 opacity-50" />
                  <p>
                    {language === "fa"
                      ? "QR کد تولید شده اینجا نمایش داده خواهد شد"
                      : "Generated QR code will appear here"}
                  </p>
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
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "سفارشی‌سازی" : "Customization"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "انتخاب رنگ و اندازه دلخواه"
                  : "Choose custom colors and sizes"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "چندین نوع" : "Multiple Types"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "پشتیبانی از متن، لینک و اطلاعات"
                  : "Support for text, URLs, and data"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "دانلود آسان" : "Easy Download"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "دانلود و کپی کردن QR کد"
                  : "Download and copy QR codes"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsQRGenerator;
