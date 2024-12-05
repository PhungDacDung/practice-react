
import axios from "./axios-customize"

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}

const getUser = (id) =>{
    return axios.get(`/api/users/${id}`)
}

const createUser = (name, job) => {
    return axios.post("/api/users", { name, job })
}

const updateUser = (id,name,job) =>{
    return axios.put(`/api/users/${id}`,{name:name,job:job})
}

const deleteUser = (id) =>{
    return axios.delete(`/api/users/${id}`)
}

export {fetchAllUser, createUser,updateUser,deleteUser,getUser};
