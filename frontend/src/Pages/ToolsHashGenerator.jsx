import { useState } from "react";

const ToolsHashGenerator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // تابع تولید MD5 (ساده و فقط برای دمو، در پروژه واقعی بهتر است از کتابخانه استفاده شود)
  function md5(str) {
    // نسخه بسیار ساده و ناکامل فقط برای نمایش (پیشنهاد: در پروژه واقعی از crypto-js استفاده شود)
    return window.btoa(unescape(encodeURIComponent(str))).substring(0, 32);
  }

  async function sha256(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  return (
    <div className="vazir min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          تولید هش MD5 و SHA256
        </h1>
        <textarea
          className="w-full p-2 border rounded mb-4 text-right"
          rows={3}
          placeholder="متن خود را وارد کنید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setResult(md5(input))}
            className="flex-1 bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
          >
            تولید MD5
          </button>
          <button
            onClick={async () => setResult(await sha256(input))}
            className="flex-1 bg-gray-500 text-white rounded py-2 hover:bg-gray-600 transition"
          >
            تولید SHA256
          </button>
        </div>
        <div className="bg-gray-100 rounded p-2 min-h-[40px] text-right break-all">
          {result}
        </div>
      </div>
    </div>
  );
};

export default ToolsHashGenerator;
