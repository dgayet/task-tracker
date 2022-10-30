import React from 'react'
import {FaTimes} from 'react-icons/fa'

export interface task {
    id: number,
    text: string,
    day: string,
    reminder: boolean
}

interface Props {
   task: task, 
   onDelete: Function,
   onToggle: Function,
}


function Task({task, onDelete, onToggle}: Props) {
    return (
        <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3><span>{task.text}</span> <FaTimes style={{cursor: 'pointer'}}
                                     onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task