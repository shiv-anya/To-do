# Tick-it-off App

The **Tick-it-off App** is a productivity tool designed to help users manage their daily tasks efficiently. It features task creation, editing, filtering, and a calendar view for better organization.

## Features

- Add, edit, and delete tasks.
- Support for subtasks.
- Filter tasks based on dates (e.g., today, this week, past tasks).
- Interactive calendar view to visualize task deadlines.
- Search tasks by title in real-time.
- Persistent storage using browser's local storage.
- Manage projects using simple, editable notes to jot down ideas and organize tasks visually.

## Installation

### Prerequisites

- Node.js (version >= 16.0.0)
- npm or yarn

### Steps

1. Clone the repository:

```bash
git clone https://github.com/shiv-anya/to-do.git
 ```
3. Navigate to the Project Directory

```bash
cd todo-app
```

3. Install Dependencies

```bash
npm install
```

4. Start the Development Server

```bash
npm start
```

## Usage

- **Adding Tasks**: Use the "Add Task" button to create a new task with a title, due date, and optional subtasks.
- **Editing Tasks**: Click the edit icon next to a task to modify it.
- **Filtering Tasks**: Navigate through tabs to see tasks for "Today," "This Week," and other categories.
- **Calendar View**: Click on a date in the calendar to see tasks due on that day.
- **Search**: Type in the search bar to filter tasks by title.
- **Sticky Notes**:
  - Use the "+" icon to create a new sticky note.
  - Click on a pencil icon to edit its content.
  - Use the cross icon to remove unwanted notes.

## Tech Stack

- **Frontend**: React, Redux Toolkit, React Router
- **Styling**: CSS Modules / TailwindCSS
- **State Management**: Redux Toolkit
- **Persistent Storage**: Browser's LocalStorage

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

Feel free to open issues for any bug reports or feature requests!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Live Demo

Check out the live demo: [Tick-it-off App](https://tick-it-off.vercel.app/)
