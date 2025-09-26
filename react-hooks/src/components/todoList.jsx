// React 16.x code​​​​​​‌‌‌​​​‌‌​​​‌​‌‌​​‌​‌‌‌‌‌​ below
import React, { useState } from "react";

// TaskItem component - displays an individual task with a checkbox
function TaskItem(props) {
  // TODO: Implement the TaskItem component
  // It should display a task with a checkbox for completion status
  // When the checkbox is clicked, it should call a function passed via props
  const task = props.task;
  return (
    <div className="task-item">
      <input type="checkbox" checked={task.completed} onChange={() => props.toggleTask(task.id)} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
    </div>
  );
}

// TaskList component - manages the tasks and coordinates between components
function TaskList() {
  // Initial tasks array
  const initialTasks = [
    { id: 1, name: "Learn React Hooks", completed: false },
    { id: 2, name: "Build a Task List", completed: false },
    { id: 3, name: "Practice useState", completed: true }
  ];
  
  // TODO: Use the useState hook to manage the tasks array
    const [tasks, setTasks] = useState(initialTasks);

  // TODO: Implement the toggleTask function
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };


  // Calculate the number of incomplete tasks
  const remainingTasks = tasks.filter(task => !task.completed).length;
  // TODO: Calculate the actual number of remaining tasks

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <p className="task-counter">
        {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} remaining
      </p>
      
      {/* TODO: Render the list of TaskItem components */}
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `TaskList` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <TaskList />;
}
/* Ignore and do not change the code above */

// Export the main component
export default TaskList;