import React from 'react';

import { ToDoForm } from './components/ToDoForm';
import { ToDoItem } from './components/ToDoItem';
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {getTodos} from "./components/selectors"
import { deleteToDo, addToDo } from './components/slice';

export interface ITodo{
  id: number,
  text: string
}

function App() {

  
const todos = useSelector(getTodos)
const dispatch = useDispatch()
const handleAdd = (text:string)=>{
  dispatch(addToDo(text))

}
const handleToDo = (id: number)=>{
  dispatch(deleteToDo(id))

}
  return (
    <div>
      <h1>To do list</h1>
<ToDoForm addToDo={handleAdd}/>
<ul>{todos.map((toDo)=>{
  return <ToDoItem key={toDo.id} removeToDo={handleToDo} item={toDo}/>
})}</ul>

    </div>
  );
}

export default App;
