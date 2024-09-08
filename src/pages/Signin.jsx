import { useState } from "react"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";
import BottomWarning from "../components/BottomWarning";

function Signin() {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const navigate = useNavigate();

    async function loginUser(){
        const response= await axios.post("http://localhost:5000/api/v1/user/signin",{
            username,
            password
        });
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userId",response.data.userId);
        navigate("/dashboard");
    }
  return (
    <div className="bg-gray-400 h-screen flex justify-center">

        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center p-2 px-4 my-5 h-max">
            <Heading label={"Sign In"}/>
            <SubHeading label={"Enter your credentials to create your account"} />
            <InputBox label={"Username"} placeholder={"john_doe@gmail.com"} onchange={e=>{setUsername(e.target.value)}} />
            <InputBox label={"Password"} placeholder={""} onchange={e=>{setPassword(e.target.value)}} />
            <div>
                <Button onClick={loginUser} label={"Sign In"} />
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
        </div>


    </div>
  )
}

export default Signin
