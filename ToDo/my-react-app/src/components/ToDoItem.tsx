import {ITodo} from "../App"
import {FC} from "react"

interface IPropsToDo{
    item: ITodo,
    removeToDo: (id: number)=> void
}

export const ToDoItem: FC<IPropsToDo> = ({item , removeToDo} )=>{

    const handleRemove=()=>{
        removeToDo(item.id)
    }
    return(
        <li>
            <p>{item.text}</p>
            <button type="button" onClick={handleRemove}>Delete</button>
        </li>
    )
}