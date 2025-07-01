import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    window.open("https://juried.gumroad.com/l/ytyrp", "_blank");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Cold Email Generator</h1>
      {!unlocked ? (
        <div className="space-y-4">
          <button onClick={handleUnlock} className="bg-blue-500 text-white px-4 py-2 rounded">Unlock CSV Export</button>
          <button onClick={() => setUnlocked(true)} className="bg-gray-300 px-4 py-2 rounded">I'm a customer</button>
        </div>
      ) : (
        <div className="mt-4">
          <a href="/sample.csv" download className="bg-green-500 text-white px-4 py-2 rounded">Download CSV</a>
        </div>
      )}
    </div>
  );
}
