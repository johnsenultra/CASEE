import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import NotFound from "./pages/NotFound";
import PublicRoute from "./components/routes_components/public_route";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import PublicLayout from "./layouts/PublicLayout";
import PrivateRoute from "./components/routes_components/private_route";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointments from "./pages/dashboard/Appointments";
import Students from "./pages/dashboard/Students";
import Counselors from "./pages/dashboard/Counselors";
import Schedule from "./pages/dashboard/Schedule";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";
import Layout from "./layouts/Layout";

function App() {
  return (
    // Wrap the app with auth provider to provide authencation context
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing / Marketing pages */}
          <Route element={<PublicLayout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <LandingPage />
                </PublicRoute>
              }
            />
          </Route>
          {/* Public routes / auth pages */}
          <Route element={<AuthLayout />}>
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />

            <Route
              path="signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
          </Route>

          <Route path="/dashboard" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="appointments"
              element={
                <PrivateRoute>
                  <Appointments />
                </PrivateRoute>
              }
            />
            <Route
              path="students"
              element={
                <PrivateRoute>
                  <Students />
                </PrivateRoute>
              }
            />
            <Route
              path="counselors"
              element={
                <PrivateRoute>
                  <Counselors />
                </PrivateRoute>
              }
            />
            <Route
              path="schedule"
              element={
                <PrivateRoute>
                  <Schedule />
                </PrivateRoute>
              }
            />
            <Route
              path="notifications"
              element={
                <PrivateRoute>
                  <Notifications />
                </PrivateRoute>
              }
            />
            <Route
              path="settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
          </Route>

          {/* Catch not found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
