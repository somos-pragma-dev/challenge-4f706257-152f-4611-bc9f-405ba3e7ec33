import React, { useContext, useEffect } from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { useUserContext } from '../context/UserContext';
import UserStatusNotification from '../notifications/UserStatusNotification';

const UserDashboard = () => {
  const { users, loading, error } = useFetchUsers();
  const { dispatch } = useUserContext();

  useEffect(() => {
    if (users.length > 0) {
      dispatch({ type: 'SET_USERS', payload: users });
    }
  }, [users]);

  const handleStatusChange = (id, status) => {
    dispatch({ type: 'UPDATE_USER_STATUS', payload: { id, status } });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.status}
            <button onClick={() => handleStatusChange(user.id, user.status === 'active'? 'inactive' : 'active')}>
              Cambiar Estado
            </button>
          </li>
        ))}
      </ul>
      <UserStatusNotification />
    </div>
  );
};

export default UserDashboard;