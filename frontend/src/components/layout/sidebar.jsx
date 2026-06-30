import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaRobot,
  FaCalendarAlt,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "AI Assistant",
      path: "/ai",
      icon: <FaRobot />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Focus Mode",
      path: "/focus",
      icon: <FaClock />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-500">
          TaskPilot
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-2">

          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>

                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}

        </ul>

      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-800 p-5">

        <div className="bg-slate-800 rounded-xl p-4 mb-4">

          <h3 className="text-sm font-semibold text-white">
            🚀 Stay Productive
          </h3>

          <p className="text-xs text-slate-400 mt-2">
            Let AI organize your day and never miss a deadline.
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;