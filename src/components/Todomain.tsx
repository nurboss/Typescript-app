import React, { useEffect, useRef, useState } from 'react'
import { addToLocalStore, getStore, removeFromLocalStore } from './AddToLStore';
import './Todomain.css'
import { 
  HiOutlinePlusCircle,
 } from 'react-icons/hi';
import { 
  AiTwotoneDelete
 } from 'react-icons/ai';

const Todomain = () => {
 
  interface input {
    id: number;
    text: string;
  }
  const todoRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<input[]>([]);

    useEffect(() => {
          displayNotes();
    },[])

  function displayNotes(){
    const notes = getStore();
    setTodos(notes)
  }
  
  const makeTodo = () => {
    if(todoRef.current){
    const todo = {
      id: Math.round(Math.random()*10000),
      text: todoRef.current.value
    }
    displayNotes()
    const newData = [...todos, todo]
    addToLocalStore(todo)
    setTodos(newData)
    
    todoRef.current.value= '';
  }
  }

  const removeFromtodos = (id: number) => {
    const deleteTodo = todos.filter((data) => data.id !== id );
      setTodos(deleteTodo);
      removeFromLocalStore(id);
  }
  const colors = ['#59E1FF', '#FFF069', '#FF87A4','#59E1FF', '#FFF069', '#FF87A4','#59E1FF', '#FFF069', '#FF87A4','#59E1FF', '#FFF069', '#FF87A4','#59E1FF']
  
  
  
  return (
    <div className='main'>
      <h1 className='head-line'>Todo App</h1>

      <div className='input-field'>   
      <input placeholder='Enter your Text' type="text" ref={todoRef}/>
      <HiOutlinePlusCircle title='Add' className="icon" onClick={makeTodo} />
      </div>
            
      {
        todos.map((data, i) => <h2  style={{ backgroundColor: colors[i] }} className='result-box' key={data.id}> {data.text}
        <AiTwotoneDelete className='delete-icon' onClick={() => removeFromtodos(data.id)} /> 
        </h2>)
      }

    </div>
  )
}

export default Todomain

