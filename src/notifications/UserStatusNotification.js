import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

const UserStatusNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { state } = useUserContext();

  useEffect(() => {
    if (state.users.some(user => user.status === 'inactive')) {
      setShowNotification(true);
    }
  }, [state.users]);

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  return showNotification? <p>Se ha cambiado el estado de un usuario.</p> : null;
};

export default UserStatusNotification;