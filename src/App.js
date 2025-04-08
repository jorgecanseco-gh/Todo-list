import styles from './App.module.css';
import React, { useState } from 'react'; // Importing React and useState from react

function App() {
    const [inputValue, setInputValue] = useState(''); // UseState for input value
    const [tasks, setTasks] = useState([]); // USestate for task LIst
  
  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      return; // Prevent adding empty tasks
    } else {
    setTasks([...tasks, inputValue]); // Add task to the list
    setInputValue(''); // Clear the input field
  }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Delete task from the list
  }

  return (
    <div className={styles.wrapper}>
    <h1 className={styles.title}>TODO LIST</h1>
    <section className={styles.addTask}>
    <div className={styles.inputContainer}>
      <input 
      type='text' 
      className={styles.addTaskInput} 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </div>
      <button className={styles.addTaskButton} onClick={handleAddTask}>Add</button>
    </section>
    <section className={styles.taskList}>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <span onClick={() => handleDeleteTask(index)}>❌</span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}

export default App;
