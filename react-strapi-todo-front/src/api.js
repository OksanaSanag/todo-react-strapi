import axios from 'axios';

const API_url = `http://localhost:1337/tasks`;

const responseData = (res) => res.data;

export default {
    creatrTask: async (description) => {
        const res = await axios.post(API_url, {description});
        return responseData(res);
    },

    editTaskChanges: async ({id, description}) => { console.log('description', description)
        const res = await axios.put(`http://localhost:1337/tasks/${id}`, {description}); 
        return responseData(res);
    },

    deleteTask: async (id) => {
        const res = await axios.delete(`http://localhost:1337/tasks/${id}`); 
        console.log('res', res)
        return responseData(res);
    }
}