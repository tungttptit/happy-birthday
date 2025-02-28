import { useState } from "react";
import Confetti from "react-confetti";

export default function BirthdayPage() {
  const handlePlay = () => {
    window.open("https://www.youtube.com/watch?v=Wu8NeFXaoOc", "_blank");
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <Confetti />
      <h1 className="text-5xl font-bold text-pink-600 mb-4">Happy Birthday!</h1>
      <p className="text-xl text-gray-800 mb-6">Chúc mừng sinh nhật a Tuấn Anh 🎉🎂</p>
      <button onClick={handlePlay} className="bg-purple-500 text-white px-4 py-2 rounded-lg">
        Phát nhạc 🎶
      </button>
    </div>
  );
}
