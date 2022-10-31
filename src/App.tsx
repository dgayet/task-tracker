// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {task} from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'

const server = 'http://localhost:5001/tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  const fetchTasks = async() => {
    const res = await fetch(server);
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id: string) => {
    const res = await fetch(`${server}/${id}`);
    const data = await res.json();

    return data;
  }

  const addTask = async (task: {text: string, day: string, reminder: boolean}) => {
    const res = await fetch(server,
       {method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random()*10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);
    // console.log(task)
  }

  const deleteTask = async (id: string) => {
    await fetch(`${server}/${id}`, {method: 'DELETE'});
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id: string) => {
    const taskToToggle: task = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`${server}/${id}`, 
        {
          method: 'PUT',
          headers: {
          'Content-type': 'application/json'
         },
          body: JSON.stringify(updTask)
        });
    
    const data = await res.json();

    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: data.reminder}: task));
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
