/*
Fetch en VITE_API_URL;(.env) 
-----------------------------------------
Endpoint: http://localhost:4000/api => This Endpoint might change for you
+ /Auth/*
+ /Event/*

more info: Readme.md file on proyect folder!
*/


import axios from "axios";
import { getEnvVariable } from '../../helpers/getEnvVariables';


const { VITE_API_URL } = getEnvVariable();
const dbmongoApi = axios.create({
    baseURL: VITE_API_URL
})

//interceptores de request!

dbmongoApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})


export default dbmongoApi;