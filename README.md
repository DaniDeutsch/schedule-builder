# Schedule Builder

A task scheduling app I built with Next.js and TypeScript. Features a calendar view, task management, and desktop notifications.

**Live Demo:** [https://schedule-builder-omega.vercel.app/](https://schedule-builder-omega.vercel.app/)

## Features

- Create, edit, delete, and complete tasks with full CRUD operations
- Set start and end times for tasks with datetime pickers
- Three priority levels (Low, Medium, High) with color coding
- Organize tasks by categories (Work, Personal, Health, etc.)
- Monthly calendar view with task indicators
- Browser notifications for reminders (5 minutes before tasks)
- Local storage for data persistence
- Fully responsive design for mobile and desktop

## Tech Stack

- Next.js 13 (app router)
- TypeScript
- Tailwind CSS
- Zustand for state management
- date-fns for date handling
- Lucide icons
- Radix UI components

## Getting Started

**Prerequisites:** Node.js 18.16.0 or higher

```bash
git clone https://github.com/DaniDeutsch/schedule-builder.git
cd schedule-builder
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## How to Use

- Click "Add New Task" to create a new task
- Fill in the task details (title, time, priority, category, etc.)
- Use the calendar to navigate between dates
- Click the circle icon to mark tasks as complete
- Edit or delete tasks using the icons on each task card
- Allow notification permissions to receive reminders

## Future Enhancements

- Recurring tasks
- Calendar sync with Google Calendar/Outlook
- Dark mode
- Analytics and statistics dashboard
- Team collaboration features
- Backend API with database integration
