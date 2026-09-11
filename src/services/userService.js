export const userService = {
  fetchUsers: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1, name: 'User 1', status: 'active' }, { id: 2, name: 'User 2', status: 'inactive' }]);
      }, 1000);
    });
  }
};