# Schedule Builder

A modern, full-stack task scheduling application built with Next.js, TypeScript, and Tailwind CSS. Perfect for interview discussions and demonstrating full-stack development skills.

## Features

### Core Functionality
- ✅ **Task Management**: Add, edit, delete, and complete tasks
- ✅ **Time Scheduling**: Set start and end times for tasks
- ✅ **Priority Levels**: Low, medium, and high priority tasks
- ✅ **Categories**: Organize tasks by category (Work, Personal, etc.)
- ✅ **Progress Tracking**: Visual completion status with checkboxes

### Advanced Features
- 📅 **Calendar View**: Monthly calendar with task indicators
- 🔔 **Desktop Notifications**: Browser notifications for task reminders
- 💾 **Local Storage**: Persistent data storage using Zustand
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, intuitive interface with Tailwind CSS

### Technical Highlights
- **TypeScript**: Full type safety throughout the application
- **State Management**: Zustand for efficient state management
- **Component Architecture**: Reusable, modular components
- **Date Handling**: Robust date/time management with date-fns
- **Notifications API**: Native browser notifications
- **Responsive Design**: Mobile-first approach

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management
- **date-fns**: Modern date utility library
- **Lucide React**: Beautiful icon library

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Git**: Version control

## Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

## Interview Discussion Points

### Technical Architecture
- **Component Design**: Explain the modular component structure
- **State Management**: Discuss Zustand vs Redux/Context API
- **Type Safety**: Benefits of TypeScript in a real application
- **Performance**: Optimizations like memoization and efficient re-renders

### Problem Solving
- **Date Handling**: Complex date/time logic and edge cases
- **Notifications**: Browser API integration and permission handling
- **Data Persistence**: Local storage vs database considerations
- **Responsive Design**: Mobile-first approach and breakpoint strategy

### Scalability Considerations
- **Database Integration**: How to migrate from localStorage to a real database
- **Real-time Updates**: WebSocket integration for collaborative features
- **Authentication**: User management and data isolation
- **API Design**: RESTful API structure for backend integration

## Future Enhancements

### Potential Features
- 🔄 **Recurring Tasks**: Daily, weekly, monthly task patterns
- 👥 **Collaboration**: Share schedules with team members
- 📊 **Analytics**: Task completion statistics and insights
- 🔗 **Integrations**: Calendar sync (Google Calendar, Outlook)
- 🌙 **Dark Mode**: Theme switching capability
- 📱 **PWA**: Progressive Web App for mobile installation

### Technical Improvements
- **Backend API**: Node.js/Express or Next.js API routes
- **Database**: PostgreSQL or MongoDB integration
- **Real-time**: WebSocket connections for live updates
- **Testing**: Jest and React Testing Library
- **Deployment**: Vercel, Netlify, or AWS deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for demonstrating full-stack development skills
