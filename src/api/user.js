import requestAgent from './requestAgent';

const { request } = requestAgent;

const createUser = (data) => {
  console.log('[create][user]');
  request({
    method: 'POST',
    endpoint: '/api/user/create',
    params: {},
    json: true,
    data,
  });
}
  

const login = (data) =>
  request({
    method: 'GET',
    endpoint: '/api/user/login',
    params: {},
    json: true,
    data,
  });

export { login, createUser };
