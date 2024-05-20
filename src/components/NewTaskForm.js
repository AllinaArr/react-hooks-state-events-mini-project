import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code",
  });

  const newCat = categories.filter((category) => category !== "All");
  const catOptions = newCat.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  function handleChange(evt) {
    setNewTask({
      ...newTask,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmition(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  return (
    <form className='new-task-form' onSubmit={handleSubmition}>
      <label>
        Details
        <input type='text' name='text' onChange={handleChange} />
      </label>
      <label>
        Category
        <select name='category'>
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type='submit' value='Add task' onChange={handleChange} />
    </form>
  );
}

export default NewTaskForm;
