import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import Calendar from "./pages/calendar";
import AIAssistant from "./pages/AIassistant";
import FocusMode from "./pages/focusmode";
import NotFound from "./pages/notfound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai"
          element={
            <ProtectedRoute>
              <AIAssistant />
            </ProtectedRoute>
          }
        />

        <Route
          path="/focus"
          element={
            <ProtectedRoute>
              <FocusMode />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;