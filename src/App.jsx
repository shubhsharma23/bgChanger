import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [reverseColor, setReverseColor] = useState("#000000");

  const handleColorChange = (event) => {
    setColor(event.target.value);
    getTextColorForBackground();
  };

  function getTextColorForBackground() {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Calculate the perceived brightness (0-255) of the background color
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Set a threshold to determine when to switch to black text
    const threshold = 128;

    // Choose black or white text based on the background brightness
    let invertedColor = brightness > threshold ? "#000000" : "#ffffff";

    return invertedColor;
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="fixed top-10 flex justify-center inset-x-0 text-3xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Background Changer{" "}
          <mark
            className="mx-2 px-2 bg-white-600 rounded"
            style={{
              color: color,
              backgroundColor: getTextColorForBackground(),
            }}
          >
            APP
          </mark>
        </h1>

        <div className="fixed bottom-12 flex justify-center inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              type="button"
              onClick={() => setColor("#ffffff")}
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              onClick={() => setColor("#808080")}
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Dark
            </button>
            <button
              type="button"
              onClick={() => setColor("#008000")}
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              Green
            </button>

            <div className="text-center">
              <input
                className="m-auto"
                type="color"
                value={color}
                onChange={handleColorChange}
              ></input>
              <h1 className="font-medium" style={{ color: color }}>
                {color}
              </h1>
            </div>

            <button
              type="button"
              onClick={() => setColor("#ff0000")}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("#ffff00")}
              className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Yellow
            </button>
            <button
              type="button"
              onClick={() => setColor("#800080")}
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
