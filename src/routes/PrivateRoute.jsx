import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute() {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;

  if (!loading && user?.email) {
    return <Outlet />;
  }
  if (!loading && !user?.email) <Navigate to="/login" />;
}
