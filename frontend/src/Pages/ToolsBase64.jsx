import { useState } from "react";

const ToolsBase64 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const encode = () => {
    try {
      setResult(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setResult("خطا در رمزنگاری!");
    }
  };
  const decode = () => {
    try {
      setResult(decodeURIComponent(escape(atob(input))));
    } catch {
      setResult("خطا در رمزگشایی!");
    }
  };

  return (
    <div className="vazir min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          رمزنگاری و رمزگشایی Base64
        </h1>
        <textarea
          className="w-full p-2 border rounded mb-4 text-right"
          rows={4}
          placeholder="متن خود را وارد کنید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex gap-2 mb-4">
          <button
            onClick={encode}
            className="flex-1 bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
          >
            رمزنگاری
          </button>
          <button
            onClick={decode}
            className="flex-1 bg-gray-500 text-white rounded py-2 hover:bg-gray-600 transition"
          >
            رمزگشایی
          </button>
        </div>
        <div className="bg-gray-100 rounded p-2 min-h-[40px] text-right break-all">
          {result}
        </div>
      </div>
    </div>
  );
};

export default ToolsBase64;
