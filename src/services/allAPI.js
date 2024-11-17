import {baseURL} from './baseURL';
import { commnAPI } from './commonAPI';

export const registerComplaint = async(data)=>{
    return await commnAPI('post', `${baseURL}/new-complaint`, data);
}