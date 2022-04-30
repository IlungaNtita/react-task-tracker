import React from 'react'
import { useState } from 'react'
import ToggleButton from './ToggleButton'

function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    const onToggle = () => {

        setReminder(reminder === false ? true : false)

        console.log(reminder)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="newitem">Task</label>
                <input type="text" id="newitem" value={text} placeholder="Add Task Text" onChange={(e) => setText(e.target.value)}/>
                
                <label htmlFor="newitem">Day & Time</label>
                <input type="text" value={day} placeholder="Add Day & Time" onChange={(e) => setDay(e.target.value)}/>
                
                <ToggleButton 
                    label="Set Reminder"
                    labelOff="Reminder set"
                    onToggle={onToggle} 
                    name="reminder"
                    isActive={reminder}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask