export interface Task {
  id: string;
  title: string;
  description?: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  id: string;
  date: string; // YYYY-MM-DD format
  tasks: Task[];
}

export interface Notification {
  id: string;
  taskId: string;
  title: string;
  message: string;
  scheduledFor: string; // ISO string
  sent: boolean;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  priority: 'low' | 'medium' | 'high';
  category?: string;
}

export type ViewMode = 'day' | 'week' | 'month';
