import { ChangeEvent, FormEvent, useState } from "react"


export const ToDoForm = ({addToDo}: {addToDo: (text: string)=> void})=>{
    const [text, setText] = useState<string>('')

    const handleAddToDo=(e:FormEvent)=>{
        e.preventDefault()
        setText("")
        addToDo(text)
       
    }
    return(
        <form onSubmit={handleAddToDo}>
            <input name="text" type="text" value={text} onChange={(e: ChangeEvent<HTMLInputElement>)=>{setText( e.target.value)}}/>
            <button type="submit">create</button>
        </form>

    )
}