import axios from 'axios'
import { Component } from 'react';

export class Service extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         myimg:''
      }
    }
    

    registerUser(userDetails){
        console.log(userDetails);
        return new Promise((resolve,reject)=>{
            axios.post("http://localhost:8020/user/register",userDetails,{
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }).then((res)=>{
                console.log(res);
                resolve(res);
            }).catch((error)=>{
                console.log(error);
                reject(error);
            })
        })
    }
    
  
    validateUser(userDetails){
        console.log(userDetails);
        return new Promise((resolve, reject)=>{
            axios.post("http://localhost:8020/user/validate", userDetails ,{
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }).then((res)=>{
            
                console.log(res);
                resolve(res);
            }).catch((error)=>{
                console.log(error);
                reject(error);
            })
        }
        )
   
}

addFavourite(bookDetails){

    return new Promise((resolve,reject)=>{
        axios.post("http://localhost:8020/fav/add",bookDetails,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
            }
        }).then((res)=>{
            res.data.thumbnail=this.state.myimg;
            resolve(res);
        })
        .catch((error)=>{
            reject(error);
        })
    })
    
}

addToRecommend(bookDetails){
    console.log(bookDetails);
    return new Promise((resolve,reject)=>{
        axios.post("http://localhost:8020/addRecommend",bookDetails,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':`Bearer ${sessionStorage.getItem("mytoken")}`
            }
        }).then((res)=>{
            console.log(res.data);      
            resolve(res);
        })
        .catch((error)=>{
            console.log(error);
            reject(error);
        })
    })
}


}

export default Service




