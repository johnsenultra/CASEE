import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import DashboarLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";
import PublicRoute from "./components/routes_components/public_route";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import PublicLayout from "./layouts/PublicLayout";

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

          <Route element={<DashboarLayout />}>{/* Private routes */}</Route>

          {/* Catch not found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
