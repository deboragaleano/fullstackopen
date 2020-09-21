import axios from 'axios'; 
const base_URL = 'http://localhost:3001/api/persons' 

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
const remove = (id) => {
    const request = axios.delete(`${base_URL}/${id}`)
    return request.then(resp => resp.data)
}

// update - PUT 
const update = (id, newObject) => {
    const request = axios.put(`${base_URL}/${id}`, newObject)
    return request.then(resp => resp.data)
}

export default {getContacts, create, remove, update} 
