import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { getEventList, createEvent } from '../../api/event';

const EventListPage = () => {
  const getEventListMuta = useMutation(getEventList);
  const eventList = getEventListMuta?.data?.data?.data;
  console.log('[eventList]: ', eventList);

  const createEventMuta = useMutation(createEvent);

  useEffect(() => {
    createEventMuta.mutate({
      id: '000000',
      name: 'event1',
    });
  }, []);

  return <div>EventListPage</div>;
};

export default EventListPage;
