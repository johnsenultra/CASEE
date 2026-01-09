import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import LandingPage from "./pages/LandingPage"
import AuthLayout from "./layouts/AuthLayout"
import DashboarLayout from "./layouts/DashboardLayout"
import NotFound from "./pages/NotFound"

function App() {

  return (
    // Wrap the app with auth provider to provide authencation context
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/auth" element={ <AuthLayout /> }>
            {/* Public routes */}
          </Route>

          <Route path="/" element={<DashboarLayout />}>
            {/* Private routes */}
          </Route>
          
          {/* Catch not found pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App