# Schedule Builder

a task scheduling app i built with Next.js and TypeScript. has a calendar view, task management, and desktop notifications.

## Features

- create, edit, delete, and complete tasks
- set start and end times for tasks
- three priority levels (low, medium, high) with color coding
- organize by categories (work, personal, health, etc.)
- monthly calendar view with task indicators
- browser notifications for reminders (5 min before tasks)
- local storage so your data persists
- works on mobile and desktop

## Tech Stack

- Next.js 13 (app router)
- TypeScript
- Tailwind CSS
- Zustand for state management
- date-fns for date handling
- Lucide icons
- Radix UI components

## Getting Started

need Node.js 18.16.0 or higher

```bash
git clone https://github.com/DaniDeutsch/schedule-builder.git
cd schedule-builder
npm install
npm run dev
```

then open [http://localhost:3000](http://localhost:3000)

## How to Use

- click "Add New Task" to create a new task
- fill in the details (title, time, priority, category, etc.)
- use the calendar to jump between dates
- click the circle icon to mark tasks complete
- edit or delete using the icons on each task
- make sure to allow notifications so you get reminders

## Things I Want to Add

- recurring tasks
- calendar sync with google/outlook
- dark mode
- analytics/stats dashboard
- maybe team collaboration features
- backend with actual database instead of local storage
