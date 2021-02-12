import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ToDoTaskForm from './ToDoTaskForm';
import Task from './Task';

import '../../src/styles.css';

function TasksList() {

    const [list, setList] = useState([]);

    useEffect(() => {
        const urlAPI = 'http://localhost:1337/tasks';
        axios.get(urlAPI).then((resp) => {
            const allTasks = resp.data;
            setList(allTasks);
        });        
    }, []);

    const updateListUfterChange = (data) => {
        const newList = list.filter(el => el.id !== data.id );
        console.log('newList', newList);
        setList([data, ...newList]);
    };

    const updateListAfterCreate = (data) => { 
        setList([data, ...list]);
    };

    const updateListAfterDelete = (id) => {
        const newList = list.filter(el => el.id !== id);
        console.log('newList', newList);
        setList([...newList]);
    };


    const doSort = (data) => {

    }

    const listView = list.map(item => {
        return <li key={item.id}><Task task={item} updateListUfterChange={updateListUfterChange} updateListAfterDelete={updateListAfterDelete} /></li>
    });

    // тут зробити спінер
    
    return (
        <div className='mainBlock'>
            <h2>Task List. </h2>            
            <ToDoTaskForm updateListAfterCreate={updateListAfterCreate} />
            <div className='taskList'> {listView} </div>
        </div>
    )
}

export default TasksList;