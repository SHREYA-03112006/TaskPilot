import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { FaPlay, FaPause, FaRedo, FaClock } from "react-icons/fa";

function FocusMode() {
  const INITIAL_TIME = 25 * 60;

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      alert("🎉 Pomodoro Completed! Take a short break.");
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStart = () => setIsRunning(true);

  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(INITIAL_TIME);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Focus Mode 🎯
          </h1>

          <p className="text-slate-400 mt-2">
            Stay focused and complete one task at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Timer */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center">

            <div className="w-56 h-56 rounded-full border-8 border-blue-500 flex items-center justify-center mb-8">

              <div className="text-center">

                <FaClock className="text-4xl text-blue-500 mx-auto mb-3" />

                <h2 className="text-5xl font-bold">
                  {formatTime()}
                </h2>

                <p className="text-slate-400 mt-2">
                  {isRunning ? "Focus Time 🚀" : "Pomodoro Timer"}
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <button
                onClick={handleStart}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPlay />
                Start
              </button>

              <button
                onClick={handlePause}
                className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPause />
                Pause
              </button>

              <button
                onClick={handleReset}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaRedo />
                Reset
              </button>

            </div>

          </div>

          {/* Right Panel */}
          <div className="space-y-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Pomodoro Technique
              </h2>

              <ul className="text-slate-300 space-y-2 text-sm">
                <li>🍅 Focus for 25 minutes</li>
                <li>☕ Take a 5-minute break</li>
                <li>🔁 Repeat 4 cycles</li>
                <li>🌴 Take a longer 20-minute break</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Productivity Tip
              </h2>

              <p className="text-slate-300">
                Silence notifications, keep only one task open, and avoid multitasking during a focus session.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Motivation 💡
              </h2>

              <p className="italic text-slate-300">
                "Small consistent progress beats occasional bursts of effort."
              </p>
            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default FocusMode;