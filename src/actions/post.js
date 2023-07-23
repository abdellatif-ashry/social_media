import { baseURL } from "./baseURL";
import axios from "axios";

export let send_with_img =async (url,body) =>
{
    let config = {
    headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.token}`
        }
    }
    let res = await axios.post(baseURL + url,  body , config)
    // res = await res.data
    return res
}


export let send_without_img =async (url,body) =>
{
    try {
        
        let config = {
            headers: {
                Accept: 'application/json',
                 "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
            
        }
        let res = await axios.post(baseURL + url, body, config)
        
        console.log(res);
        return res.data
    } catch (error) {
        alert(error.message);
    }
}