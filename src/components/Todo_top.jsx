import { useContext, useState } from 'react'
import '../css/todo.css';
import {UserContext} from '../context/context'

const Todo_top = () => {

  const { add, setAdd } = useContext(UserContext);

  const [inputValue, setInputValue] = useState("")

  const usersInput = () => {
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content:inputValue
    }

    setAdd([...add, request]);
    setInputValue("");
    console.log(add)
  }

  const keepInput = (e)=>{
    const keepValue = e.target.value;
    setInputValue(keepValue);
  }

    const sentInput = (event) => {
      if(event.key ==='Enter'){
        usersInput()
      }
    }


  return (
    <div className='top_box'>
      <input
       type="text"
       placeholder='Todo daxil edin..'
       className='inp' 
       value={inputValue}
       onChange={keepInput}
        onKeyDown={sentInput} 
        />
      <button className='btn' onClick={usersInput}>Todo yarat..</button>

    </div>
  )
}

export default Todo_top
