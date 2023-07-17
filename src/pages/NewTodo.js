import React from 'react'
import { Link } from 'react-router-dom'
import arrowleft from '../assets/arrowleft.png'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const NewTodo = () => {
    let [todo, setTodo] = useState({})
    const navigate = useNavigate()

    let createTodo = async()=>{
        await fetch('http://127.0.0.1:8000/api/todo-list/', {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(todo)
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
            <button onClick={()=> createTodo()}>Create</button>
        </div>
        <textarea onChange={(e)=>{setTodo({...todo.body, 'body':e.target.value})}}></textarea>
    </div>
  )
}

export default NewTodo