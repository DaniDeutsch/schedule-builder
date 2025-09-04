import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, Schedule, Notification, TaskFormData } from '@/types';
import { v4 as uuidv4 } from 'uuid';

interface ScheduleStore {
  // State
  tasks: Task[];
  schedules: Schedule[];
  notifications: Notification[];
  viewMode: 'day' | 'week' | 'month';
  selectedDate: string;
  
  // Actions
  addTask: (taskData: TaskFormData) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskComplete: (id: string) => void;
  setViewMode: (mode: 'day' | 'week' | 'month') => void;
  setSelectedDate: (date: string) => void;
  addNotification: (taskId: string, scheduledFor: string) => void;
  markNotificationSent: (id: string) => void;
  getTasksForDate: (date: string) => Task[];
  getTasksForWeek: (startDate: string) => Task[];
  getTasksForMonth: (year: number, month: number) => Task[];
}

export const useScheduleStore = create<ScheduleStore>()(
  persist(
    (set, get) => ({
      // Initial state
      tasks: [],
      schedules: [],
      notifications: [],
      viewMode: 'day',
      selectedDate: new Date().toISOString().split('T')[0],

      // Actions
      addTask: (taskData: TaskFormData) => {
        const newTask: Task = {
          id: uuidv4(),
          ...taskData,
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));

        // Add notification for task
        get().addNotification(newTask.id, newTask.startTime);
      },

      updateTask: (id: string, updates: Partial<Task>) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, ...updates, updatedAt: new Date().toISOString() }
              : task
          ),
        }));
      },

      deleteTask: (id: string) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          notifications: state.notifications.filter((notif) => notif.taskId !== id),
        }));
      },

      toggleTaskComplete: (id: string) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
              : task
          ),
        }));
      },

      setViewMode: (mode: 'day' | 'week' | 'month') => {
        set({ viewMode: mode });
      },

      setSelectedDate: (date: string) => {
        set({ selectedDate: date });
      },

      addNotification: (taskId: string, scheduledFor: string) => {
        const task = get().tasks.find((t) => t.id === taskId);
        if (!task) return;

        const notification: Notification = {
          id: uuidv4(),
          taskId,
          title: task.title,
          message: `Time to start: ${task.title}`,
          scheduledFor,
          sent: false,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          notifications: [...state.notifications, notification],
        }));
      },

      markNotificationSent: (id: string) => {
        set((state) => ({
          notifications: state.notifications.map((notif) =>
            notif.id === id ? { ...notif, sent: true } : notif
          ),
        }));
      },

      getTasksForDate: (date: string) => {
        return get().tasks.filter((task) => {
          const taskDate = task.startTime.split('T')[0];
          return taskDate === date;
        });
      },

      getTasksForWeek: (startDate: string) => {
        const start = new Date(startDate);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);

        return get().tasks.filter((task) => {
          const taskDate = new Date(task.startTime);
          return taskDate >= start && taskDate <= end;
        });
      },

      getTasksForMonth: (year: number, month: number) => {
        return get().tasks.filter((task) => {
          const taskDate = new Date(task.startTime);
          return taskDate.getFullYear() === year && taskDate.getMonth() === month;
        });
      },
    }),
    {
      name: 'schedule-storage',
    }
  )
);
