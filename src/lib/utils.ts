import { format, startOfWeek, endOfWeek, eachDayOfInterval, parseISO } from 'date-fns';

export const formatTime = (dateString: string): string => {
  return format(parseISO(dateString), 'h:mm a');
};

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), 'MMM dd, yyyy');
};

export const formatDateTime = (dateString: string): string => {
  return format(parseISO(dateString), 'MMM dd, yyyy h:mm a');
};

export const getWeekDays = (date: string) => {
  const start = startOfWeek(parseISO(date), { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(parseISO(date), { weekStartsOn: 1 });
  
  return eachDayOfInterval({ start, end });
};

export const getTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    const time = format(new Date().setHours(hour, 0, 0, 0), 'h:mm a');
    slots.push({ value: `${hour.toString().padStart(2, '0')}:00`, label: time });
  }
  return slots;
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getPriorityColor = (priority: 'low' | 'medium' | 'high') => {
  switch (priority) {
    case 'high':
      return 'text-red-600 bg-red-100';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'low':
      return 'text-green-600 bg-green-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};
