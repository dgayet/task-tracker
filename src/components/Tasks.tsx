import React from 'react'
import Task from './Task'
import {task} from './Task'

export type {task}


interface Props {
    tasks: task[],
    onDelete: Function,
    onToggle: Function,
}


function Tasks({tasks, onDelete, onToggle}: Props) {

    return (
        <div className = "tasksContainer">
            {tasks.map((task: task, index) => (
                <Task key={index} task={task} 
                      onDelete={onDelete}
                      onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default Tasks