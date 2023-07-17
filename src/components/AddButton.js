import React from 'react'
import { Link } from 'react-router-dom'
import AddImg from '../assets/add.png'

const AddButton = () => {
  return (
        <Link to='/todo/new' className='floating-button'>
            <img src={AddImg} width={60} alt='add'/>
        </Link>
  )
}

export default AddButton