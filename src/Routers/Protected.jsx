import { Navigate, useLocation } from "react-router-dom";
import { useAuthContex } from "../Contex/AuthProvider";

// eslint-disable-next-line react/prop-types
const Protected = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  if (loading) {
    return <h3 className="text-center py-5">🔃 Loading...</h3>;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default Protected;
