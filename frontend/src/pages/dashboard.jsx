import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

import Layout from "../components/layout/layout";
import StatCard from "../components/common/statscard";
import TaskCard from "../components/common/taskcard";

import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <Layout>
      <div className="space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Here's your productivity overview.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Tasks"
            value={totalTasks}
            icon={<FaTasks />}
            color="bg-blue-600 text-white"
          />

          <StatCard
            title="Completed"
            value={completedTasks}
            icon={<FaCheckCircle />}
            color="bg-green-600 text-white"
          />

          <StatCard
            title="Pending"
            value={pendingTasks}
            icon={<FaClock />}
            color="bg-yellow-600 text-white"
          />

          <StatCard
            title="High Priority"
            value={highPriority}
            icon={<FaChartLine />}
            color="bg-red-600 text-white"
          />

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Recent Tasks */}

          <div className="lg:col-span-2">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-semibold">
                Recent Tasks
              </h2>

              <Link
                to="/tasks"
                className="text-blue-400 hover:text-blue-300"
              >
                View All
              </Link>

            </div>

            <div className="space-y-5">

              {tasks.length === 0 ? (
                <p className="text-slate-400">
                  No tasks available.
                </p>
              ) : (
                tasks.slice(0, 3).map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    priority={task.priority}
                    deadline={task.deadline}
                    completed={task.status === "Completed"}
                    onDelete={() => {}}
                    onComplete={() => {}}
                  />
                ))
              )}

            </div>

          </div>

          {/* AI Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <FaRobot className="text-blue-500 text-2xl"/>

              <h2 className="text-xl font-semibold">
                AI Assistant
              </h2>

            </div>

            <div className="space-y-4">

              <div className="bg-slate-800 rounded-xl p-4">

                <h3 className="font-semibold">
                  🚀 Ready to plan your day?
                </h3>

                <p className="text-slate-400 mt-2 text-sm">
                  Let TaskPilot AI analyze your tasks and create the best execution strategy.
                </p>

              </div>

              <Link
                to="/ai"
                className="block text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
              >
                Open AI Assistant
              </Link>

            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;