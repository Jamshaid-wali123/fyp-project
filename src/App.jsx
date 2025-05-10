import "./App.css";
import { Routes, Route } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './pages/auth/SignIn';
import ProfilePage from './pages/home/ProfilePage';
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        {/* Add other protected routes here */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
