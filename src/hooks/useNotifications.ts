import { useEffect } from 'react';
import { useScheduleStore } from '@/lib/store';

export const useNotifications = () => {
  const { notifications, markNotificationSent } = useScheduleStore();

  useEffect(() => {
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const checkNotifications = () => {
      const now = new Date();
      
      notifications.forEach((notification) => {
        if (!notification.sent) {
          const scheduledTime = new Date(notification.scheduledFor);
          const timeDiff = scheduledTime.getTime() - now.getTime();
          
          // Show notification 5 minutes before scheduled time
          if (timeDiff > 0 && timeDiff <= 5 * 60 * 1000) {
            if (Notification.permission === 'granted') {
              new Notification(notification.title, {
                body: notification.message,
                icon: '/favicon.ico',
                badge: '/favicon.ico',
              });
              
              markNotificationSent(notification.id);
            }
          }
        }
      });
    };

    // Check every minute
    const interval = setInterval(checkNotifications, 60 * 1000);
    
    // Initial check
    checkNotifications();

    return () => clearInterval(interval);
  }, [notifications, markNotificationSent]);

  return null;
};
