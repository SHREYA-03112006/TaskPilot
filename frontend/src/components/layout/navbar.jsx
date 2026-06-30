import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-sm text-slate-400">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-slate-800 px-3 py-2 rounded-lg w-72">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent outline-none ml-3 text-white placeholder:text-slate-500 w-full"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
          <FaBell className="text-white" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-white">
              Shreya
            </p>
            <p className="text-xs text-slate-400">
              Student
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;