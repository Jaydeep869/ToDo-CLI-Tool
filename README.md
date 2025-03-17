# Todo CLI - Command Line Todo Manager

![Node.js](https://img.shields.io/badge/node.js-18.x-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-blue)

A simple yet powerful command-line Todo manager built with Node.js. Manage your tasks efficiently with basic CRUD operations and persistent JSON storage.

## Features

- **Add Todos**: Create new tasks with simple commands
- **Delete Todos**: Remove completed or unwanted tasks
- **List Todos**: View all your current tasks at a glance
- **Read Specific Todo**: Quickly find specific tasks
- **Persistent Storage**: Data saved in JSON format (task.json)
- **Duplicate Prevention**: Smart detection of existing tasks
- **Simple Interface**: User-friendly command-line operations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jaydeep869/ToDo-CLI-Tool.git
   cd todo-cli
2. Install Dependencies:

```bash
npm install yargs lodash
```
Ensure you have **Node.js v18 or higher** installed.


## Usage

```bash
node app.js <command> [--title="Your Task"]
```

### Available Commands

| Command      | Description                  | Example |
|-------------|------------------------------|---------|
| `addToDo`   | Add a new todo item          | `node app.js addToDo --title="Meeting"` |
| `deleteToDo`| Remove a todo item           | `node app.js deleteToDo --title="Meeting"` |
| `readTodo`  | View details of a specific todo | `node app.js readTodo --title="Meeting"` |
| `listToDo`  | Display all todos            | `node app.js listToDo` |

## Example Workflow

### Add a new task
```bash
node app.js addToDo --title="Finish project report"
```

### List all tasks
```bash
node app.js listToDo
```

### Read a specific task
```bash
node app.js readToDo --title="Finish project report"
```

### Delete a task
```bash
node app.js deleteToDo --title="Finish project report"
```

## Technology Stack

- **Node.js**: JavaScript runtime environment
- **Yargs**: Powerful command-line argument parsing
- **Lodash**: Modern JavaScript utility library
- **JSON File Storage**: Persistent data storage in `task.json`

## File Structure

```bash
todo-cli/
├── app.js          # Main application logic
├── todo.js         # Core todo functionality
├── task.json       # Todo items storage
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

## Acknowledgements

- **Yargs team** for simplifying command-line argument parsing
- **Lodash contributors** for powerful utility functions
- **Node.js community** for the amazing runtime environment

**Happy Task Managing! 🚀**
