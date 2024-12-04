
import axios from "./axios-customize"

const fetchAllUser = (page) =>{
    return axios.get(`/api/users?page=${page}`)
}
export default fetchAllUser;