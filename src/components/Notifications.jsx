import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../api';


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = fetchNotifications();
    setNotifications(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
