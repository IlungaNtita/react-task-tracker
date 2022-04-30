import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete, toggleReminder}) {
    return (
        <>
            <transition-group name="tasklist" tag="ul">
                <br/>
                {tasks.map((task) => (
                    <Task task={task} key={task.id} onDelete={onDelete} toggleReminder={toggleReminder}/>
                ))}
            </transition-group>
        </>
    )
}

export default Tasks