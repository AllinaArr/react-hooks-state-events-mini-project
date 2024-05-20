import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter((task) => {
      return task.text !== taskToDelete;
    });
    setTasks(updatedTasks);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleSelection(selectedCategory) {
    setCategory(selectedCategory);

    const displayTaskList =
      selectedCategory === "All"
        ? TASKS
        : TASKS.filter((task) => task.category === selectedCategory);
    setTasks(displayTaskList);
  }

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        Scategory={category}
        onCategoryClick={handleSelection}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
