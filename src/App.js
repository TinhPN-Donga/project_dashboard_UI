import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading/Loading'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate, Outlet, useLocation,
} from "react-router-dom";

//pages
import RedirectPage from './pages/Redirect';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<RedirectPage />} />
      <Route element={<ProtectedRouteLogin />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path='/404' element={<PageNotFound/>} />
      <Route path="/*" element={<Navigate to='/404' />} />
    </Routes>
  );
}

export default App;

function PageNotFound(){
  return <><h2>404 Not Found</h2></>
}

function ProtectedRoute(){
  const location = useLocation();
  const isAuthenticated  = localStorage.getItem("access_token")?true:false;
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

function ProtectedRouteLogin(){
  const location = useLocation();
  const isAuthenticated  = localStorage.getItem("access_token")?true:false;
  return isAuthenticated ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
}