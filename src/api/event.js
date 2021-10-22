import requestAgent from './requestAgent';

const { request } = requestAgent;

const createEvent = (data) =>
  request({
    method: 'GET',
    endpoint: '/api/event/create',
    params: {},
    json: true,
    data,
  });

const getEventList = () =>
  request({
    method: 'GET',
    endpoint: '/api/event/list',
    params: {},
    json: true,
  });

export { getEventList, createEvent };
