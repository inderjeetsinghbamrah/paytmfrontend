import { useLocation, useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"


export const Dashboard = () => {
    const location = useLocation();
    const navigate= useNavigate();
    const [message, setMessage]= useState(location.state?.message || "");

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMessage("");
            navigate("/dashboard",{replace:true, state:{}});
        },3000);

        return ()=>clearTimeout(timer);
    },[navigate])
    return (
        <div>
            <Appbar/>
            <Balance balance={10000} />
            <Users/>
            <div className="w-80">
                {message?(<div className="items-center bg-green-500 p-4 rounded">
                    <p className="text-center text-white">{message}</p>
                </div>):""}
            </div>
        </div>
    )
}
