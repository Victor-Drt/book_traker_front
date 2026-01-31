import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth.service";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children;
}