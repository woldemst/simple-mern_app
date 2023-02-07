import React from 'react'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import Header from '../components/Header'


export default function Todo() {

  const [listOfTasks, setListOfTasks] = useState({
    taskName: "",
    startDate: "",
    dueDate: "", 
    importance: ""
  })

  const [taskName, setTaskName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [importance, setImportance] = useState('')



  useEffect(() => { 
    Axios.get('http://localhost:3001/getTasks').then((response) => {
      setListOfTasks(response.data)
    })
  }, [])

  const createTodo = () => {
    Axios.post('http://localhost:3001/createTodo', {
      taskName: listOfTasks.taskName,
      startDate: listOfTasks.startDate, 
      dueDate: listOfTasks.dueDate,
      importance: listOfTasks.importance

    }).then((response) => {
      setListOfTasks([...listOfTasks,
        {
          taskName,
          startDate,
          dueDate,
          importance
        }
      ])
    })
  }
  
  return (
    <div className="todo_list">
      <Header />
        <div className="headline">Todo list</div>
        <table>
            <tr>
                <th>Task</th>
                <th>Start</th>
                <th>Due</th>
                <th>Importance</th>
            </tr>
            {listOfTasks.map((todo)=>{
                return (

                  <tr>
                    <td> {todo.taskName}</td>
                    <td> {todo.startDate}</td>
                    <td> {todo.dueDate}</td>
                    <td> {todo.importance}</td>
                  </tr>
                )
              })}
        </table>
        

        <div className="create-todo">
          <input type="text" placeholder='Task...'  
              onChange={(event)=>{
              setTaskName(event.target.value)
          }}/>
          <input type="text" placeholder='Start...' 
              onChange={(event)=>{
              setStartDate(event.target.value)
              }}
              />

          <input type="text" placeholder='Username...' 
              onChange={(event)=>{
              setDueDate(event.target.value)
              }}
          />

          <input type="text" placeholder='Importance...' 
              onChange={(event)=>{
              setImportance(event.target.value)
              }}
          />
          <button onClick={createTodo}>Create user</button>
        </div>
    </div>
  );
}

