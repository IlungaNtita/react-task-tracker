// import logo from './logo.svg';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

const demo = [
    {
        id: 1,
        text: "Write for Envato Tuts+",
        day: "Feb 13 at 2:30pm",
        reminder: false,
    },
    {
        id: 2,
        text: "work out",
        day: "Feb 13 at 2:30pm",
        reminder: false,
    },
    {
        id: 3,
        text: "Procrastinate on Duolingo",
        day: "Feb 13 at 2:30pm",
        reminder: false,
    },
]

function App() {
  const [ tasks, setTasks ] = useState(demo)
  const [ showTask, setShowTask ] = useState(false)
  const [ isActive, setIsActive ] = useState(false)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // const toggleReminder = (id) => {
  //   setTasks(tasks.map((task) => {
  //     if(task.id === id){
  //       if (task.reminder === false){
  //         task.reminder = true
  //         return task
  //       } else {
  //         task.reminder = false
  //         return task
  //       } 
  //     } else {
  //       return task
  //     }
  //   }))
  // }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])

    console.log("add task", task)
  }
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder:
        !task.reminder } : task
      )
    )
  }

  return (
    <div>
      <div id="todolist">
        <div className="todo-list">
          <Header title="Task Tracker" setShowTask={setShowTask} showTask={showTask} />
          {showTask === true ? <AddTask onAdd={addTask} isActive={isActive} setIsActive={setIsActive} /> : <div></div>}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : <p className="emptylist"> You have no tasks.</p>}
        </div>
      </div>
      <div className="signature">
        <p>Made with <i className="much-heart"></i> by <a href="https://ilungantita.github.io">Ntita Ilunga</a></p>
      </div>
    </div>
  );
}

export default App;
