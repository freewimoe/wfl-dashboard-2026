import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardHome } from './components/DashboardHome';
import { Login } from './components/Login';
import { Projects, News, Schedule, Tasks, Users, Settings, Guides } from './components/Placeholders';
import { AuthProvider, useAuth } from './context/AuthContext';

function DashboardLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DashboardLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
