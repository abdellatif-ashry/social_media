import { baseURL } from "./baseURL"
import axios from "axios"
let get_data = async (url,page) =>
{
    let res = await axios(baseURL+url+`?limit=15&page=${page}`)
    res = await res.data
    return res
}

export default get_data;