import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import {Navigate, useNavigate} from "react-router-dom" 

export const Login=()=>{
    const {handleAuth}=useContext(AuthContext);
    const Navigate=useNavigate()
    return(
        <div>
            <input type="text" placeholder="username" ></input>{" "}
            <input type="text" placeholder="password" ></input>
            <button
            onClick={()=>{
                handleAuth(true);
                Navigate(-2);
            }}
            >submit</button>
        </div>
    )
}