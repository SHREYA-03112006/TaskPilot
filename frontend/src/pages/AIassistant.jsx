import { useState } from "react";
import Layout from "../components/layout/layout";
import API from "../api/api";
import { FaRobot, FaMagic } from "react-icons/fa";

function AIAssistant() {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const generatePlan = async () => {
    try {
      setLoading(true);

      // Fetch all tasks
      const taskResponse = await API.get("/tasks");

      const tasks = taskResponse.data.map((task) => ({
        title: task.title,
        description: task.description,
        priority: task.priority,
        deadline: task.deadline,
        status: task.status,
      }));

      // Send tasks to AI
      const response = await API.post("/ai/prioritize", {
        tasks,
      });

      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error(error);
      setRecommendation("Unable to generate recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-white">
            AI Productivity Assistant 🤖
          </h1>

          <p className="text-slate-400 mt-2">
            Let AI analyze your tasks and create the best execution plan.
          </p>

        </div>

        {/* Generate Button */}

        <button
          onClick={generatePlan}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl mb-8"
        >
          <FaMagic />
          Generate AI Plan
        </button>

        {/* Loading */}

        {loading && (
          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-blue-400 text-lg">
              🤖 AI is analyzing your tasks...
            </p>
          </div>
        )}

        {/* Result */}

        {!loading && recommendation && (

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <FaRobot />
              </div>

              <h2 className="text-2xl font-bold">
                AI Recommendation
              </h2>

            </div>

            <div className="whitespace-pre-wrap text-slate-300 leading-8">
              {recommendation}
            </div>

          </div>

        )}

      </div>
    </Layout>
  );
}

export default AIAssistant;