import React from 'react'
import {useState} from 'react'

interface Props {
    onAdd: Function
}

function AddTask({onAdd} : Props) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!text) {
            alert('Plese add a task');
            return
        }

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task..."
                        value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control ">
                <label>Day & Time</label>
                <input type="text" placeholder="add day & time..."
                        value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                        checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask