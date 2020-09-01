import axios from 'axios'; 
const base_URL = 'http://localhost:3001/persons' 

// all - GET
const getContacts = () => {
    const request = axios.get(base_URL)
    return request.then(resp => resp.data); 
}


// add - POST 
const addContact = (contact) => {
    const request = axios.post(base_URL, contact)
    return request.then(resp => resp.data)
}

export default {getContacts, addContact}