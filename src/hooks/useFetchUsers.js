import { useState, useEffect } from 'react';
import { userService } from '../services/userService';

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    userService.fetchUsers()
     .then(data => {
        setUsers(data);
        setLoading(false);
      })
     .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
};