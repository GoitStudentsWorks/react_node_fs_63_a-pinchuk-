import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = () => {
  const accessToken = useSelector(selectAccessToken);

  return accessToken ? (
    <div style={{ display: 'flex' }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};
