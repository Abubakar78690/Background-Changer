import { useState, useEffect } from "react";

function App() {
  const [colors, setColor] = useState("white");
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 500);
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-all duration-500"
      style={{ backgroundColor: colors }}
    >
      {/* Heading with improved styling */}
      <h1
  className={`text-6xl font-extrabold mb-12 transition-all duration-700 transform ${
    textVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
  }`}
  style={{
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "2px 4px 6px rgba(0,0,0,0.3)", // Add shadow for depth
    lineHeight: "1.2", // Adjust line height to ensure proper positioning
    letterSpacing: "1px", // Optional, adds spacing for clarity
  }}
>
  Background Changer
</h1>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 bg-white bg-opacity-90 shadow-xl px-5 py-4 rounded-3xl border-2 border-gray-200">
          {["red", "black", "green", "purple", "blue", "gray", "pink", "olive", "lavender", "white"].map((color) => (
            <button
              key={color}
              onClick={() => setColor(color)}
              className="outline-none px-4 py-2 rounded-full text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              style={{
                backgroundColor: color,
                color: color === "pink" || color === "white" || color === "lavender" ? "black" : "white",
              }}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
