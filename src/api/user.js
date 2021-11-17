import requestAgent from './requestAgent';

const { request } = requestAgent;

const createUser = (data) => 
  request({
    method: 'POST',
    endpoint: '/api/user/create',
    params: {},
    json: true,
    data,
  });

const getUserList = () => 
  request({
    method: 'POST',
    endpoint: '/api/user/list',
    params: {},
    json: true,
  });

const deleteUser = (data) =>  
  request({
    method: 'POST',
    endpoint: '/api/user/delete',
    params: {},
    json: true,
    data,
  });

const updateUser = (data) => 
  request({
    method: 'POST',
    endpoint: '/api/user/update',
    params: {},
    json: true,
    data,
  });

const getWishList = (data) => 
  request({
    method: 'POST',
    endpoint: '/api/user/wishList',
    params: {},
    json: true,
    data,
  });

const login = (data) =>
  request({
    method: 'POST',
    endpoint: '/api/user/login',
    params: {},
    json: true,
    data,
  });

export { login, createUser, deleteUser, updateUser, getUserList, getWishList };
