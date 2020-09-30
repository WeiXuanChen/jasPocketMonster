import useAPI from '../utils/useAPI';

export const useGetRestList = () => {
  return useAPI({
    method: 'POST',
    url: 'http://localhost:3102/api/shop/get',
  });
};

export const useAddRestList = () => {
  return useAPI({
    method: 'POST',
    url: 'http://localhost:3102/api/shop/create',
  });
};

export default null;
