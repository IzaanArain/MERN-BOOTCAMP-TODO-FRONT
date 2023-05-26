import axios from "axios";

const API_URL="http://localhost:5000/api/users/"

//Register
const register=async(userDate)=>{
    const response =await axios.post(API_URL+"register/",userDate)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService={
    register, 
}

export default authService