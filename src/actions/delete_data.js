import { baseURL } from './baseURL'
import axios from 'axios'

const delete_data = async (url) =>
{
    let config = {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    }
    let res = await axios.delete(`${baseURL}${url}`, config)
    
    return res
}

export default delete_data
