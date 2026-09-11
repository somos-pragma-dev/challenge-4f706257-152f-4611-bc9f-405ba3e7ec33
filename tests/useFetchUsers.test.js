import { useFetchUsers } from '../src/hooks/useFetchUsers';
import { userService } from '../src/services/userService';
import { act, renderHook } from '@testing-library/react-hooks';

jest.mock('../src/services/userService');

describe('useFetchUsers', () => {
  it('should fetch users and set them in state', async () => {
    userService.fetchUsers.mockResolvedValue([{ id: 1, name: 'User 1', status: 'active' }]);
    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    await waitForNextUpdate();
    expect(result.current.users).toEqual([{ id: 1, name: 'User 1', status: 'active' }]);
  });

  it('should handle errors', async () => {
    userService.fetchUsers.mockRejectedValue(new Error('Failed to fetch users'));
    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    await waitForNextUpdate();
    expect(result.current.error).toBeInstanceOf(Error);
  });
});