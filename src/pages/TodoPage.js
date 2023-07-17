import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// import todos from '../assets/data'
import arrowleft from '../assets/arrowleft.png'


const TodoPage = (props) => {
    const{id} = useParams()
    const navigate = useNavigate();
    console.log(useParams())

    // let todo = todos.find((todo)=> todo.id===Number(id))
    // console.log(todo)

    let [todo, setTodo] = useState({})

    useEffect(()=>{
        getTodo()
    }, [id])

    let getTodo = async()=>{
        let response = await fetch(`http://127.0.0.1:8000/api/todo/${id}/`)
        let data = await response.json()
        setTodo(data)
    }

    let updateTodo = async()=>{
        await fetch(`http://127.0.0.1:8000/api/todo/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({...todo, 'updated_at': new Date()})
        })
        navigate('/')
    }

    let deleteTodo = async()=>{
        await fetch(`http://127.0.0.1:8000/api/todo/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(todo.body)
        })
        navigate('/')
    }




  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <img src={arrowleft} width={30} alt='arrowleft'/>
                </Link>
            </h3>
            <button onClick={()=>updateTodo()}>Save</button>
            <button  onClick={()=>deleteTodo()}>Delete</button>
        </div>
        {/* <p>{todo.title}</p> */}
        <textarea onChange={(e)=>{setTodo({...todo.body, 'body':e.target.value})}} value={todo.body}>

        </textarea>
        
    </div>
  )
}

export default TodoPage