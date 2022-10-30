// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Feb 10th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 15th at 2:30pm',
        reminder: false,
    }
])

  const addTask = (task: {text: string, day: string, reminder: boolean}) => {
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
    console.log(task)
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id: number) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder}: task));
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onClick={() => setShowAddTask(!showAddTask)}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ' '}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
                                 onDelete={deleteTask} 
                                 onToggle={toggleReminder}/> :
      <span className="message">there are no tasks left.</span>}
    </div>
  );
}

export default App;
