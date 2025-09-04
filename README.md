# Schedule Builder

A modern, full-stack task scheduling application built with Next.js, TypeScript, and Tailwind CSS. Features a responsive calendar interface, real-time task management, and desktop notifications.

## Features

### Core Functionality
- **Task Management**: Create, edit, delete, and complete tasks with full CRUD operations
- **Time Scheduling**: Set precise start and end times with datetime pickers
- **Priority System**: Three priority levels (Low, Medium, High) with visual color coding
- **Categories**: Organize tasks by custom categories (Work, Personal, Health, etc.)
- **Progress Tracking**: Visual completion status with checkboxes and progress indicators

### Advanced Features
- **Calendar Integration**: Monthly calendar view with task indicators and date navigation
- **Desktop Notifications**: Browser notifications for task reminders using the Notifications API
- **Local Storage**: Persistent data storage using Zustand with automatic state management
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Real-time Updates**: Instant UI updates with optimistic state management

### Technical Highlights
- **TypeScript**: Full type safety throughout the application
- **Modern React**: Built with Next.js 13 App Router and React 18
- **State Management**: Efficient state management with Zustand
- **Component Architecture**: Modular, reusable components with proper separation of concerns
- **Date Handling**: Robust date/time management with date-fns library
- **Accessibility**: Built with accessibility in mind using Radix UI primitives

## Tech Stack

### Frontend
- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management
- **date-fns**: Modern date utility library
- **Lucide React**: Beautiful icon library
- **Radix UI**: Accessible component primitives

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Git**: Version control

## Getting Started

### Prerequisites
- Node.js 18.16.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DaniDeutsch/schedule-builder.git
cd schedule-builder
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Adding Tasks
1. Click "Add New Task" button
2. Fill in task details (title, description, time, priority, category)
3. Click "Add Task" to save

### Managing Tasks
- **Complete**: Click the circle icon to mark as complete
- **Edit**: Click the edit icon to modify task details
- **Delete**: Click the trash icon to remove tasks

### Calendar Navigation
- Use the calendar to navigate between dates
- Click on any date to view tasks for that day
- Use month navigation arrows to change months

### Notifications
- Grant notification permissions when prompted
- Receive desktop notifications 5 minutes before task start time

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   ├── TaskCard.tsx   # Individual task display
│   ├── TaskForm.tsx   # Task creation/editing form
│   └── Calendar.tsx   # Calendar component
├── lib/               # Utilities and store
│   ├── store.ts       # Zustand state management
│   └── utils.ts       # Helper functions
├── types/             # TypeScript type definitions
│   └── index.ts       # Main type definitions
└── hooks/             # Custom React hooks
    └── useNotifications.ts  # Notification management
```

## Key Components

### State Management (Zustand Store)
- Centralized state for tasks, schedules, and notifications
- Persistent storage with localStorage
- Type-safe actions and state updates

### Task Management
- CRUD operations for tasks
- Time-based scheduling
- Priority and category organization
- Completion tracking

### Calendar Integration
- Monthly calendar view
- Task indicators on dates
- Date navigation and selection
- Visual task density display

### Notification System
- Browser notification API integration
- Automatic reminder scheduling
- Permission handling
- Background notification checking

## Future Enhancements

### Planned Features
- **Recurring Tasks**: Daily, weekly, monthly task patterns
- **Team Collaboration**: Share schedules with team members
- **Analytics Dashboard**: Task completion statistics and insights
- **Calendar Sync**: Integration with Google Calendar, Outlook
- **Dark Mode**: Theme switching capability
- **PWA Support**: Progressive Web App for mobile installation

### Technical Improvements
- **Backend API**: Node.js/Express or Next.js API routes
- **Database Integration**: PostgreSQL or MongoDB
- **Real-time Features**: WebSocket connections for live updates
- **Testing Suite**: Jest and React Testing Library
- **CI/CD Pipeline**: Automated testing and deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with modern web technologies and best practices
