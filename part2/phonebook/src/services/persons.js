import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const update = updatedPerson => {
    const resourceUrl = `${baseUrl}/${updatedPerson.id}`
    console.log('resourceUrl:', resourceUrl)
    const request = axios.put(resourceUrl, updatedPerson)
    return request.then(response => response.data)
}

const remove = personId => {
    const resourceUrl = `${baseUrl}/${personId}`
    console.log('resourceUrl:', resourceUrl)
    const request = axios.delete(resourceUrl)
    return request.then(response => response.data)
}


export default { getAll, create, remove, update }