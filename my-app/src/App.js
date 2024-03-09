import React, {useRef, useState } from 'react'
import './App.css';
export default function App() {
    const [list , setList] = useState([]);
    const inputRef = useRef();

    const addItem = ()=>{
        const text = inputRef.current.value;
        const newList = {completed : false , text}
        setList([...list,newList])
        inputRef.current.value = "" 
  }
  const handleItemDone = (idex)=>{
      const newTodo = [...list]
      newTodo[idex].completed= ! newTodo[idex].completed;
      setList(newTodo);
  }
  const handelRemove = (index)=>{
    const newList = [...list]
    newList.splice(index,1);
    setList(newList)
  }
  return (
      <div className='app'>
          <h1>  To Do List </h1>
          <div className='to-do-container'>
            
            <ul>
              {list.map(({text , completed}, index)=>
                <div className='item'>
                  <li key={index} onClick={()=> handleItemDone(index)} className={completed ?"done" :""}>
                      {text} 
                  </li>
                  <span onClick={()=>handelRemove(index)} className='remove'>X</span>
                </div>
              )}
            </ul>
 
            <input type='text' ref={inputRef} placeholder='enter item...' />
            <button onClick={addItem}>Clic</button>
        </div>
      </div>
    
  )
}
