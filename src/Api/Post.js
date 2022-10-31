import axios from 'axios'
import { BASEURL } from './BaseUrl';
import { REGISTER } from './EndPoints';

export const POST = (data,endPoint,method)=>{
return new Promise((resolve,reject)=>{

    var config = {
        method: method,
        url: `${BASEURL}${endPoint}`,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer', 
        },
        data :     JSON.stringify(data)
      };
      
      axios(config)
      .then( (response) =>{
        resolve(response.data)
      })
      .catch( (error)=> {
        console.log(error);
        reject(error)
})
})

}