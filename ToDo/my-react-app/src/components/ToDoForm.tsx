import { useState } from "react"

export const ToDoForm = ({addToDo})=>{
    const [text, setText] = useState('')

    const handleAddToDo=(e)=>{
        e.preventDefault()
        const text = e.currentTarget.elements.text.value
        addToDo(text)
    }
    return(
        <form onSubmit={addToDo}>
            <input name="text" type="text" value={text} onChange={(e)=>{setText( e.target.value)}}/>
            <button type="submit">create</button>
        </form>

    )
}