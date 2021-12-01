import { Navigate} from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('user') 
    return authed ? children : <Navigate to="/"/>;
  }