import { FaCalendarAlt, FaClock, FaTrash, FaCheck } from "react-icons/fa";

function TaskCard({
  id,
  title,
  description,
  priority,
  deadline,
  duration,
  completed = false,
  onDelete,
  onComplete,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-md hover:border-blue-500 transition">

      {/* Header */}
      <div className="flex justify-between items-start">

        <div>
          <h3
            className={`text-lg font-semibold ${
              completed
                ? "line-through text-slate-500"
                : "text-white"
            }`}
          >
            {title}
          </h3>

          <p className="text-slate-400 mt-2 text-sm">
            {description}
          </p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            priority === "High"
              ? "bg-red-500/20 text-red-400"
              : priority === "Medium"
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {priority}
        </span>

      </div>

      {/* Info */}
      <div className="flex justify-between mt-5 text-slate-400 text-sm">

        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          {deadline}
        </div>

        <div className="flex items-center gap-2">
          <FaClock />
          {duration || "-"}
        </div>

      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-6">

        <button
          onClick={() => onComplete(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            completed
              ? "bg-green-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <FaCheck />
          {completed ? "Completed" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(id)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;