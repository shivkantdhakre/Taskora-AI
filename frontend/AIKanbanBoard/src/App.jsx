import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProtectedRoute, PublicOnlyRoute } from "./routes/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BoardPage from "./pages/BoardPage";
import MyTasks from "./pages/MyTasks";
import Calendar from "./pages/Calendar";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-tasks"  element={<MyTasks />} />
          <Route path="/calendar"  element={<Calendar />} />
          <Route path="/team"      element={<Team />} />
          <Route path="/settings"  element={<Settings />} />
          <Route path="/board/:boardId" element={<BoardPage />} />
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="*"    element={<Navigate to="/404" replace />} />
      </Routes>

      {/* Toast — warm ivory surface, graphite text, champagne border */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--color-elevated, #FFFFFF)",
            color: "var(--color-ink, #171717)",
            border: "1px solid var(--color-line, #DED9CF)",
            borderRadius: "12px",
            padding: "0.625rem 1rem",
            boxShadow: "var(--shadow-soft, 0 6px 20px rgba(23,23,23,0.08))",
            fontSize: "0.875rem",
            fontWeight: 500,
          },
        }}
      />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
