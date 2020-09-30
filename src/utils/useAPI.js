import { useCallback, useReducer } from 'react';

const initialState = {
  result: null,
  error: null,
  isLoading: false,
  isSuccess: false,
};

const useAPI = (payload) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'SUCCESS':
        return {
          result: action.payload,
          error: null,
          isLoading: false,
          isSuccess: true,
        };
      case 'ERROR':
        return {
          result: null,
          error: action.payload,
          isLoading: false,
          isSuccess: false,
        };
      case 'LOADING':
        return {
          ...prevState,
          isLoading: true,
        };
      case 'RESET':
        return initialState;
      default:
        throw new Error();
    }
  }, initialState);

  const api = useCallback(
    async (data = {}) => {
      console.log('[data]: ', data);
      dispatch({ type: 'LOADING' });
      try {
        const res = await fetch(payload.url, {
          method: payload.method || 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const resObj = await res.json();
        dispatch({ type: 'SUCCESS', payload: resObj });
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error });
      }
    },
    [dispatch, payload]
  );

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, [dispatch]);

  const { result } = state;
  const status = {
    error: state.error,
    isLoading: state.isLoading,
    isSuccess: state.isSuccess,
  };

  return [status, result, api, reset];
};

export default useAPI;
