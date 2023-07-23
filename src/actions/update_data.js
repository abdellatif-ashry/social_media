import React from 'react'
import { baseURL } from './baseURL'
import axios from 'axios'

const update_data = async (url, body) =>
{
    let config = {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    }
    let res = await axios.put(baseURL + url, body,config)
    
    return res
}

export default update_data
