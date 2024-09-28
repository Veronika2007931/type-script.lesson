import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import  {ITodo}  from "../App"

const initialState: ITodo[] = [] 

export const toDoSlice = createSlice({
name: 'toDos',
initialState ,
reducers: {
      addToDo(state, action: PayloadAction<string>){
        state.push({
            id: Date.now(),
            text: action.payload
        })
     
        
       },
     
        deleteToDo(state, action: PayloadAction<number>){
       return state.filter((toDo)=>{ 
           return toDo.id !== action.payload
     
     
         })
     
       
       }
}
})

export const { addToDo, deleteToDo} = toDoSlice.actions
export const todosReducer = toDoSlice.reducer