import {createSlice, PayloadAction} from "redux-toolkit"

import  {ITodo}  from "../App"

const initialState: ITodo[] = [] 

const toDoSlice = createSlice({
name: 'toDos',
initialState ,
redusers: {
      addToDo(state, action: PayloadAction<string>){
        state.push({
            id: Date.now(),
            text: action.payload
        })
     
        
       }
     
        deleteToDo(id: number){
        const res= toDos.filter((toDo)=>{ 
           return toDo.id !== id
     
     
         })
     
       
       }
}
})