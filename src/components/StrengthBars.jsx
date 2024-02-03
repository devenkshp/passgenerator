import { useState } from "react";

const textColors = [
  "text-red-500",
  "text-yellow-500",
  "text-green-500",
  "text-green-500",
];

const bgColors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-green-500",
];

export default function StrengthBars({ strength }) {
  const strengthMap = ["very weak", "weak", "strong", "very strong"];
  const colorMap = ["red", "yellow", "blue", "green"];
  const sticks = Array.from(Array(4).keys()); // Generates array of length 4
  const color = colorMap[strength];

  return (
    <div className="">
      <div className="flex justify-between">
        {sticks.map((i) => (
          <span
            key={i}
            className={`h-1 m-1 flex-1 inline-block ${
              i <= strength ? bgColors[strength] : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
      <p className={`text-xs ${textColors[strength]}`}>
        Your password is {strengthMap[strength]}!
      </p>
    </div>
  );
}
