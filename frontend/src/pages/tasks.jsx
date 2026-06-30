import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import TaskCard from "../components/common/taskcard";
import API from "../api/api";
import { FaPlus, FaSearch } from "react-icons/fa";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: "",
    status: "Pending",
  });

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const handleAddTask = async () => {
    try {
      await API.post("/tasks", formData);

      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        deadline: "",
        status: "Pending",
      });

      setShowModal(false);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Task
  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  // Complete Task
  const handleComplete = async (id) => {
    const task = tasks.find((t) => t.id === id);

    try {
      await API.put(`/tasks/${id}`, {
        ...task,
        status: "Completed",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-bold text-white">
              My Tasks 📋
            </h1>

            <p className="text-slate-400">
              Manage and organize all your tasks.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
          >
            <FaPlus />
            Add Task
          </button>

        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="flex items-center bg-slate-900 rounded-xl px-4 py-3">

            <FaSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-3 w-full bg-transparent outline-none text-white"
            />

          </div>
        </div>

        {/* Tasks */}
        <div className="grid lg:grid-cols-2 gap-6">

          {tasks.length === 0 ? (
            <p className="text-slate-400">
              No tasks available.
            </p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                deadline={task.deadline}
                completed={task.status === "Completed"}
                onDelete={handleDelete}
                onComplete={handleComplete}
              />
            ))
          )}

        </div>

        {/* Modal */}

        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

            <div className="bg-slate-900 p-6 rounded-xl w-96">

              <h2 className="text-2xl font-bold mb-5">
                Add Task
              </h2>

              <input
                placeholder="Title"
                className="w-full p-3 rounded mb-3 bg-slate-800"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Description"
                className="w-full p-3 rounded mb-3 bg-slate-800"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />

              <select
                className="w-full p-3 rounded mb-3 bg-slate-800"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    priority: e.target.value,
                  })
                }
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <input
                type="date"
                className="w-full p-3 rounded mb-5 bg-slate-800"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    deadline: e.target.value,
                  })
                }
              />

              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddTask}
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  Save
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </Layout>
  );
}

export default Tasks;