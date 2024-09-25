import React from 'react';

import { ToDoForm } from './components/ToDoForm';
import { ToDoItem } from './components/ToDoItem';
import { useState } from 'react';
import './App.css';

export interface ITodo{
  id: number,
  text: string
}

function App() {

  const [toDos, setToDos]= useState<ITodo[]>([])

 const  addToDo = (text: string)=>{
   const newToDo = {
    id: Date.now(),
    text
   }

   setToDos([...toDos, newToDo]) 
  }

  const deleteToDo=(id: number)=>{
   const res= toDos.filter((toDo)=>{ 
      return toDo.id !== id


    })

    setToDos(res)
  }
  return (
    <div>
      <h1>To do list</h1>
<ToDoForm addToDo={addToDo}/>
<ul>{toDos.map((toDo)=>{
  return <ToDoItem key={toDo.id} removeToDo={deleteToDo} item={toDo}/>
})}</ul>

    </div>
  );
}

export default App;
