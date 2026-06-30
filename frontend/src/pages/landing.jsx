import { Link } from "react-router-dom";
import { FaRobot, FaTasks, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-blue-500">
          TaskPilot
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
            🚀 AI Powered Productivity
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Your AI
            <span className="text-blue-500"> Productivity </span>
            Co-Pilot
          </h1>

          <p className="text-slate-400 text-lg mt-6 leading-8">
            Plan smarter, prioritize automatically, break down large tasks,
            and stay ahead of every deadline with TaskPilot.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              Start Now
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl transition"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-8">
            AI Daily Plan
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl p-4">
              📚 Complete DBMS Assignment
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              💻 Solve 5 DSA Problems
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              🎯 Resume Review
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              🤖 AI Recommended Schedule
            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why TaskPilot?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <FaRobot className="text-5xl text-blue-500 mx-auto mb-5" />

            <h3 className="text-xl font-semibold">
              AI Assistant
            </h3>

            <p className="text-slate-400 mt-4">
              Get smart recommendations, task prioritization, and personalized study plans.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <FaTasks className="text-5xl text-green-500 mx-auto mb-5" />

            <h3 className="text-xl font-semibold">
              Smart Task Management
            </h3>

            <p className="text-slate-400 mt-4">
              Organize, categorize, and track all your work effortlessly.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

            <FaCalendarAlt className="text-5xl text-purple-500 mx-auto mb-5" />

            <h3 className="text-xl font-semibold">
              Intelligent Scheduling
            </h3>

            <p className="text-slate-400 mt-4">
              AI automatically creates the best schedule based on your deadlines.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 TaskPilot • Built with ❤️ using React + FastAPI + Gemini AI
      </footer>

    </div>
  );
}

export default Landing;