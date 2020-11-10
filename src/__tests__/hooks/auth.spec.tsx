import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { AuthProvider, useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth Hook', () => {
  it('should be able to sign in', async () => {
    apiMock.onPost('sessions').reply(200, {
      user: {
        id: '1234',
        name: 'John Doe',
        email: 'johndoe@domain.com.br',
      },
      token: 'fake-ad$eaa!',
    });

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@domain.com.br',
      password: '123456',
    });

    await waitForNextUpdate();
    expect(setItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user.email).toEqual('johndoe@domain.com.br');
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@gobarber:token':
          return 'token-123';

        case '@gobarber:user':
          return JSON.stringify({
            id: '1234',
            name: 'John Doe',
            email: 'johndoe@domain.com.br',
          });

        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    expect(result.current.user.email).toEqual('johndoe@domain.com.br');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@gobarber:token':
          return 'token-123';

        case '@gobarber:user':
          return JSON.stringify({
            id: '1234',
            name: 'John Doe',
            email: 'johndoe@domain.com.br',
          });

        default:
          return null;
      }
    });
    const spyRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => result.current.signOut());

    expect(spyRemoveItem).toHaveBeenCalledTimes(2);
  });

  it('should be able to update user data', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    const user = {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@domain.com.br',
      avatar_url: 'avatar.png',
    };

    act(() => {
      result.current.updateUser(user);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      '@gobarber:user',
      JSON.stringify(user),
    );
    expect(result.current.user).toEqual(user);
  });
});
