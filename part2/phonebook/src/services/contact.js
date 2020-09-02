import axios from 'axios'; 
const base_URL = 'http://localhost:3001/persons' 

// all - GET
const getContacts = () => {
    const request = axios.get(base_URL)
    return request.then(resp => resp.data); 
}


// add - POST 
const create = (contact) => {
    const request = axios.post(base_URL, contact)
    return request.then(resp => resp.data)
}

// remove - DELETE 
// Check, no data is sent with the request? delete .then and what follows? 
const remove = (id) => {
    const request = axios.delete(`${base_URL}/${id}`)
    return request.then(resp => resp.data)
}

// update - PUT 
const update = (id, updatedObject) => {
    const request = axios.put(`${base_URL}/${id}`, updatedObject)
    return request.then(resp => resp.data)
}

export default {getContacts, create, remove, update} 
