import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  HiColorSwatch,
  HiClipboard,
  HiRefresh,
  HiDownload,
} from "react-icons/hi";

const ToolsColorPalette = () => {
  const { t, language } = useLanguage();
  const [baseColor, setBaseColor] = useState("#3B82F6");
  const [paletteType, setPaletteType] = useState("analogous");
  const [generatedPalette, setGeneratedPalette] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);

  const paletteTypes = [
    { id: "analogous", name: language === "fa" ? "مشابه" : "Analogous" },
    {
      id: "monochromatic",
      name: language === "fa" ? "تک رنگ" : "Monochromatic",
    },
    { id: "triadic", name: language === "fa" ? "سه‌گانه" : "Triadic" },
    { id: "complementary", name: language === "fa" ? "مکمل" : "Complementary" },
    {
      id: "split-complementary",
      name: language === "fa" ? "مکمل تقسیم شده" : "Split Complementary",
    },
  ];

  // Convert hex to HSL
  const hexToHsl = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  // Convert HSL to hex
  const hslToHex = (h, s, l) => {
    h /= 360;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 1) {
      r = c;
      g = x;
      b = 0;
    } else if (1 <= h && h < 2) {
      r = x;
      g = c;
      b = 0;
    } else if (2 <= h && h < 3) {
      r = 0;
      g = c;
      b = x;
    } else if (3 <= h && h < 4) {
      r = 0;
      g = x;
      b = c;
    } else if (4 <= h && h < 5) {
      r = x;
      g = 0;
      b = c;
    } else if (5 <= h && h < 6) {
      r = c;
      g = 0;
      b = x;
    }

    const rHex = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, "0");
    const gHex = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, "0");
    const bHex = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
  };

  // Generate palette based on type
  const generatePalette = () => {
    const [h, s, l] = hexToHsl(baseColor);
    let colors = [];

    switch (paletteType) {
      case "analogous":
        colors = [
          hslToHex((h - 30 + 360) % 360, s, l),
          hslToHex((h - 15 + 360) % 360, s, l),
          baseColor,
          hslToHex((h + 15) % 360, s, l),
          hslToHex((h + 30) % 360, s, l),
        ];
        break;
      case "monochromatic":
        colors = [
          hslToHex(h, s, Math.max(0, l - 40)),
          hslToHex(h, s, Math.max(0, l - 20)),
          baseColor,
          hslToHex(h, s, Math.min(100, l + 20)),
          hslToHex(h, s, Math.min(100, l + 40)),
        ];
        break;
      case "triadic":
        colors = [
          baseColor,
          hslToHex((h + 120) % 360, s, l),
          hslToHex((h + 240) % 360, s, l),
          hslToHex((h + 60) % 360, s, l),
          hslToHex((h + 180) % 360, s, l),
        ];
        break;
      case "complementary":
        colors = [
          baseColor,
          hslToHex((h + 180) % 360, s, l),
          hslToHex(h, s, Math.max(0, l - 20)),
          hslToHex((h + 180) % 360, s, Math.max(0, l - 20)),
          hslToHex(h, s, Math.min(100, l + 20)),
        ];
        break;
      case "split-complementary":
        colors = [
          baseColor,
          hslToHex((h + 150) % 360, s, l),
          hslToHex((h + 210) % 360, s, l),
          hslToHex(h, s, Math.max(0, l - 20)),
          hslToHex((h + 180) % 360, s, l),
        ];
        break;
      default:
        colors = [baseColor];
    }

    setGeneratedPalette(colors);
  };

  useEffect(() => {
    generatePalette();
  }, [baseColor, paletteType]);

  const copyToClipboard = async (color) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const downloadPalette = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 100;

    const colorWidth = canvas.width / generatedPalette.length;
    generatedPalette.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect(index * colorWidth, 0, colorWidth, canvas.height);
    });

    const link = document.createElement("a");
    link.download = "color-palette.png";
    link.href = canvas.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBaseColor(color);
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
            {language === "fa"
              ? "تولیدکننده پالت رنگی"
              : "Color Palette Generator"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {language === "fa"
              ? "پالت‌های رنگی زیبا و هماهنگ برای پروژه‌های طراحی خود ایجاد کنید"
              : "Create beautiful and harmonious color palettes for your design projects"}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {language === "fa" ? "تنظیمات پالت" : "Palette Settings"}
              </h2>
              <button
                onClick={generateRandomColor}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                <HiRefresh size={16} />
                {language === "fa" ? "رنگ تصادفی" : "Random"}
              </button>
            </div>

            {/* Base Color */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "رنگ پایه" : "Base Color"}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="w-16 h-12 bg-gray-900 border border-gray-600 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="flex-1 bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                />
              </div>
            </div>

            {/* Palette Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {language === "fa" ? "نوع پالت" : "Palette Type"}
              </label>
              <select
                value={paletteType}
                onChange={(e) => setPaletteType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {paletteTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Info */}
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">
                {language === "fa" ? "اطلاعات رنگ" : "Color Information"}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">HEX:</span>
                  <span className="font-mono">{baseColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">RGB:</span>
                  <span className="font-mono">
                    {(() => {
                      const r = parseInt(baseColor.slice(1, 3), 16);
                      const g = parseInt(baseColor.slice(3, 5), 16);
                      const b = parseInt(baseColor.slice(5, 7), 16);
                      return `${r}, ${g}, ${b}`;
                    })()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Palette Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {language === "fa" ? "پالت تولید شده" : "Generated Palette"}
              </h2>
              <button
                onClick={downloadPalette}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                <HiDownload size={16} />
                {language === "fa" ? "دانلود" : "Download"}
              </button>
            </div>

            {/* Color Palette */}
            <div className="space-y-4">
              {generatedPalette.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-lg border-2 border-gray-600 cursor-pointer hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-lg">{color}</span>
                      <button
                        onClick={() => copyToClipboard(color)}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-300 text-sm"
                      >
                        <HiClipboard size={16} />
                        {copiedColor === color
                          ? language === "fa"
                            ? "کپی شد!"
                            : "Copied!"
                          : language === "fa"
                            ? "کپی"
                            : "Copy"}
                      </button>
                    </div>
                    <div className="text-sm text-gray-400">
                      RGB:{" "}
                      {(() => {
                        const r = parseInt(color.slice(1, 3), 16);
                        const g = parseInt(color.slice(3, 5), 16);
                        const b = parseInt(color.slice(5, 7), 16);
                        return `${r}, ${g}, ${b}`;
                      })()}
                    </div>
                  </div>
                </motion.div>
              ))}
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
                {language === "fa" ? "پالت‌های متنوع" : "Diverse Palettes"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "انواع مختلف پالت رنگی"
                  : "Multiple palette types"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "کپی آسان" : "Easy Copy"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "کپی کردن کدهای رنگی"
                  : "Copy color codes easily"}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2">
                {language === "fa" ? "دانلود پالت" : "Download Palette"}
              </h3>
              <p className="text-gray-300">
                {language === "fa"
                  ? "دانلود پالت به صورت تصویر"
                  : "Download palette as image"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsColorPalette;
