import React, { useContext } from 'react'
import "../css/todo.css"
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { UserContext } from '../context/context'

const Todo = () => {

  const { add } = useContext(UserContext);

  return (
    <>

      {
        add && add.map(item =>(
                <div className='item_box' key={item.id}>
                <p className='text' >{item.content}</p>
                <div className="icons">
                  <FaEdit className='icon_edit' /><FaTrashAlt />
                </div>
              </div>
        )) 
     

      }


    </>

  )
}

export default Todo
