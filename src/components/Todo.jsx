import React, { useContext, useState } from 'react'
import "../css/todo.css"
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { UserContext } from '../context/context'
import { FaCheck } from "react-icons/fa";




const Todo = () => {

  const { add, setAdd } = useContext(UserContext);
  const [editId, setEditId] = useState(null)
  const [inpValue, setInpValue] = useState("")

  const editTodo = (idD, textValue) => {
    setEditId(idD);
    setInpValue(textValue)
  }

  const upDate = (idd) => {
    const updateData = add.map(item => {
      return idd === item.id ? { ...item, text: inpValue } : item
    })
    setAdd(updateData);
    setEditId(null)

  }






  return (
    <>

      {
        add && add.map(item => (
          <div className='item_box' key={item.id}>
            {
              editId === item.id
                ?
                <input type="text"
                  value={inpValue}
                  onChange={(e) => setInpValue(e.target.value)}

                /> :
                <p className='text' >{item.text}</p>


            }



            <div className="icons">
              {
                editId === item.id ?
                  <FaCheck onClick={() => upDate(item.id)} /> :

                  <FaEdit className='icon_edit' onClick={() => editTodo(item.id, item.text)}
                  />
              }

              {/* <FaTrashAlt /> */}

            </div>
          </div>
        ))


      }


    </>

  )
}

export default Todo
