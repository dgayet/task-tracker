import React from 'react'
import Task from './Task'
import {task} from './Task'


interface Props {
    tasks: task[],
    onDelete: Function,
    onToggle: Function,
}


function Tasks({tasks, onDelete, onToggle}: Props) {

    return (
        <div className = "tasksContainer">
            {tasks.map((task: task) => (
                <Task key={task.id} task={task} 
                      onDelete={onDelete}
                      onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default Tasks