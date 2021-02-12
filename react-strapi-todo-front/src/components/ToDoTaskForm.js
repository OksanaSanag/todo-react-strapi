import React, { useState } from 'react';
import '../../src/styles.css';
import api from 'api';


function ToDoTaskForm(props) {
    const { updateListAfterCreate } = props;
    const [input, setInput] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value); //console.log('event', input)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await api.creatrTask(input);
            console.log(data);
            updateListAfterCreate(data);
            setInput('');
        } catch (err) {
            console.log(err);
        } 
    }

    //обновити сторінку, щоб новий таск відобразився

    return (
        <form className='toDoTaskForm' onSubmit={ handleSubmit }>
            <textarea                
                placeholder='Add a todo' 
                value={ input } 
                type='text' 
                wrap='soft'
                onChange={ handleChange }
                className='inputForm'
            />
            <button className='todoButton' type='submit'>Add todo</button>
        </form>
    )
}

export default ToDoTaskForm;