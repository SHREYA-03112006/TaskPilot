import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import API from "../api/api";
import { FaCalendarAlt } from "react-icons/fa";

function Calendar() {
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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-white">
            Calendar 📅
          </h1>

          <p className="text-slate-400 mt-2">
            Track your upcoming deadlines.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Calendar */}

          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-6">

              <FaCalendarAlt className="text-blue-500 text-xl"/>

              <h2 className="text-xl font-semibold">
                Calendar
              </h2>

            </div>

            <div className="grid grid-cols-7 gap-3">

              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day=>(
                <div
                  key={day}
                  className="text-center font-semibold text-slate-400"
                >
                  {day}
                </div>
              ))}

              {Array.from({length:35}).map((_,index)=>(
                <div
                  key={index}
                  className="h-20 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition"
                >
                  {index+1}
                </div>
              ))}

            </div>

          </div>

          {/* Deadlines */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6">
              Upcoming Deadlines
            </h2>

            {tasks.length===0 ? (

              <p className="text-slate-400">
                No upcoming tasks.
              </p>

            ) : (

              <div className="space-y-4">

                {tasks.map(task=>(

                  <div
                    key={task.id}
                    className="bg-slate-800 rounded-xl p-4"
                  >

                    <h3 className="font-semibold text-white">
                      {task.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                      📅 {task.deadline}
                    </p>

                    <p
                      className={`mt-2 text-sm ${
                        task.priority==="High"
                          ? "text-red-400"
                          : task.priority==="Medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {task.priority} Priority
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Calendar;