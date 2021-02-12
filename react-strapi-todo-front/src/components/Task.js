import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from 'api';
// import Cross from '../images/cross.png';
// import Pencil from '../images/pencil.png';
// import AddChanges from '../images/addChanges.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';


function Task(props) {
    const { task, updateListUfterChange, updateListAfterDelete } = props;
    const { id, description } = task; 
    const [isEdit, setIsEdit] = useState(false);
    const [_description, setDescription] = useState(description || '');

    const toggleEdit = () => setIsEdit(!isEdit);
    
    const changeDescription = (event) => { console.log('event.target.value', event.target.value)
        setDescription(event.target.value);              
    }

    const editChanges = async () => {
         try { 
            console.log('des', _description)
            const data = await api.editTaskChanges({id, description: _description});
            console.log(data);
            updateListUfterChange(data);
            toggleEdit();
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTask = async () => {
        try {
            await api.deleteTask(id);
            
            updateListAfterDelete(id);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='task spaceBetween align-items-start'>
            { isEdit ? 
                <>
                    <div className='row margin-left-10'>
                        <input type='text' className='changeInput' defaultValue={ _description } onChange={ changeDescription }/> 
                    </div>
                    <div className='row actions'>
                        <button type='submit' onClick = { editChanges } >< FontAwesomeIcon icon={faCheck} /></button>
                        <button className='margin-left-10'>
                            <Link to='/'> Cancel </Link>
                        </button>
                    </div>

                </>
                :
                <>
                    <div className='row'> 
                        <div className='margin-left-10'><input type='checkbox' /></div>
                        <div className='margin-left-10'> {_description} </div>
                    </div>
                    <div className='row actions'>
                        {/* <div>{Pencil && <img src={Pencil} className="add-del" alt="Pencil" onClick={ toggleEdit }/>}</div>
                        <div>{Cross && <img src={Cross} className="add-del" alt="Cross" onClick={ deleteTask } />}</div> */}
                        <button onClick={ toggleEdit }>< FontAwesomeIcon icon={faPencilAlt} /></button>
                        <button onClick={ deleteTask }>< FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    
                </>
            }
        </div>
    )
}

export default Task;