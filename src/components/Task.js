// import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, toggleReminder}) {
    return (
        <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>  
            <li className={`${task.reminder ? 'done' : ''} `}>
                <span className="label">{task.text}</span>
                <span className="label">
                    {task.day}
                </span>
                <div className="actions">
                    <button style={{cursor: 'pointer'}} className="btn-picto" type="button" onClick={() => toggleReminder(task.id)} aria-label={`${task.reminder ? 'Undone' : 'Done'}`} title={`${task.reminder ? 'Undone' : 'Done'}`}>
                        <i aria-hidden="true" className="material-icons">{ task.reminder ? 'check_box_outline_blank' : 'check_box' }</i>
                    </button>
                    <button style={{cursor: 'pointer'}} className="btn-picto" type="button" onClick={() => onDelete(task.id)} aria-label="Delete" title="Delete">
                        <i aria-hidden="true" className="material-icons" >delete</i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Task