import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    const{id, body} = props.todo;
  return (
    <Link to={`/todo/${id}`}>
        <div className='notes-list-item'>
            <h3>{body}</h3>
        </div>
        
    </Link>
  )
}

export default ListItem