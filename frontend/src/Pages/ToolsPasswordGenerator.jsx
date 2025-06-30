import { useState } from "react";

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";

const ToolsPasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generate = () => {
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(pass);
  };

  return (
    <div className="vazir min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          تولید رمز عبور قوی
        </h1>
        <div className="mb-4 flex items-center gap-2">
          <label className="text-gray-700">طول رمز:</label>
          <input
            type="number"
            min={6}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="border rounded p-1 w-16 text-center"
          />
        </div>
        <button
          onClick={generate}
          className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition mb-4"
        >
          تولید رمز عبور
        </button>
        <div className="bg-gray-100 rounded p-2 min-h-[40px] text-center break-all select-all">
          {password}
        </div>
      </div>
    </div>
  );
};

export default ToolsPasswordGenerator;
