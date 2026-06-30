import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        <h1 className="text-8xl font-extrabold text-blue-500">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-4 leading-7">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
        >
          <FaArrowLeft />
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default NotFound;