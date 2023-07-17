import React, {useState, useEffect} from 'react'
// import todos from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const TodoListPages = () => {

    let [todos, setTodos] = useState([])
    
    useEffect(()=>{
        get_todos()
    },[])

    let get_todos = async()=>{
        let response = await fetch('http://127.0.0.1:8000/api/todo-list/')
        let data = await response.json()
        setTodos(data)
    }

  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Todos</h2>
            <p className='notes-count'>{todos.length}</p>
        </div>
       <div className='todo-list'>
        {todos.map((todo) => (
            <ListItem key={todo.id} todo={todo}/>
        ))}
        </div>
        <AddButton/>
    </div>
  )
}

export default TodoListPages