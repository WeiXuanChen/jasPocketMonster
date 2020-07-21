export const useGetRestList = () => {
  console.log('[useGetRestList]');
  const api = () => {
    return ['c', 'd'];
  };
  return ['a', 'b', api];
};

export default null;
