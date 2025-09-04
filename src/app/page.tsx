'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '@/lib/store';
import { TaskCard } from '@/components/TaskCard';
import { TaskForm } from '@/components/TaskForm';
import { Calendar } from '@/components/Calendar';
import { Button } from '@/components/ui/button';
import { Plus, Calendar as CalendarIcon, List, Grid } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { useNotifications } from '@/hooks/useNotifications';
import { Task, TaskFormData } from '@/types';

export default function Home() {
  const {
    tasks,
    selectedDate,
    viewMode,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    setSelectedDate,
    setViewMode,
    getTasksForDate,
  } = useScheduleStore();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);

  // Initialize notifications
  useNotifications();

  const currentDate = parseISO(selectedDate);
  const tasksForDate = getTasksForDate(selectedDate);

  const handleAddTask = (taskData: TaskFormData) => {
    addTask(taskData);
    setIsFormOpen(false);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleUpdateTask = (taskData: TaskFormData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
      setEditingTask(undefined);
      setIsFormOpen(false);
    }
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setEditingTask(undefined);
  };

  const completedTasks = tasksForDate.filter(task => task.completed);
  const pendingTasks = tasksForDate.filter(task => !task.completed);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Schedule Builder
          </h1>
          <p className="text-gray-600">
            Organize your day with seamless task scheduling and reminders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <Calendar
              currentDate={currentDate}
              tasks={tasks}
              onDateSelect={(date) => setSelectedDate(format(date, 'yyyy-MM-dd'))}
              onMonthChange={(date) => setSelectedDate(format(date, 'yyyy-MM-dd'))}
            />
          </div>

          {/* Tasks Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {format(currentDate, 'EEEE, MMMM d, yyyy')}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {tasksForDate.length} tasks • {completedTasks.length} completed
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'day' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('day')}
                  >
                    <List className="h-4 w-4 mr-1" />
                    Day
                  </Button>
                  <Button
                    variant={viewMode === 'week' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('week')}
                  >
                    <Grid className="h-4 w-4 mr-1" />
                    Week
                  </Button>
                  <Button
                    variant={viewMode === 'month' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('month')}
                  >
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Month
                  </Button>
                </div>
              </div>

              {/* Add Task Button */}
              <div className="mb-6">
                <Button
                  onClick={() => setIsFormOpen(true)}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Task
                </Button>
              </div>

              {/* Tasks List */}
              <div className="space-y-4">
                {tasksForDate.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No tasks scheduled for this date</p>
                    <p className="text-sm">Click "Add New Task" to get started</p>
                  </div>
                ) : (
                  <>
                    {/* Pending Tasks */}
                    {pendingTasks.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-3">
                          Pending Tasks ({pendingTasks.length})
                        </h3>
                        <div className="space-y-3">
                          {pendingTasks.map((task) => (
                            <TaskCard
                              key={task.id}
                              task={task}
                              onToggleComplete={toggleTaskComplete}
                              onDelete={deleteTask}
                              onEdit={handleEditTask}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Completed Tasks */}
                    {completedTasks.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-3">
                          Completed Tasks ({completedTasks.length})
                        </h3>
                        <div className="space-y-3">
                          {completedTasks.map((task) => (
                            <TaskCard
                              key={task.id}
                              task={task}
                              onToggleComplete={toggleTaskComplete}
                              onDelete={deleteTask}
                              onEdit={handleEditTask}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Form Modal */}
      <TaskForm
        task={editingTask}
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        onCancel={handleCancelForm}
        isOpen={isFormOpen}
      />
    </div>
  );
}
