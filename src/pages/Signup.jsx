import { useState } from "react"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";
import BottomWarning from "../components/BottomWarning";

function Signup() {
    const [firstname, setFirstName]= useState("");
    const [lastname, setLastName]= useState("");
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const navigate = useNavigate();

    async function createUser(){
        const response= await axios.post("http://localhost:5000/api/v1/user/signup",{
            username,
            firstname,
            lastname,
            password
        });
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");
    }
  return (
    <div className="bg-gray-400 h-screen flex justify-center">

       <div className="flex flex-col justify-center">
       <div className="rounded-lg bg-white w-90 text-center p-2 px-4 my-5 h-max">
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox label={"First Name"} placeholder={"John"} onchange={e=>{setFirstName(e.target.value)}} />
            <InputBox label={"Last Name"} placeholder={"Doe"} onchange={e=>{setLastName(e.target.value)}} />
            <InputBox label={"Username"} placeholder={"john_doe@gmail.com"} onchange={e=>{setUsername(e.target.value)}} />
            <InputBox label={"Password"} placeholder={"abc123"} onchange={e=>{setPassword(e.target.value)}} />
            <div>
                <Button onClick={createUser} label={"Sign up"} />
            </div>
            <BottomWarning label={"Already having Account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
       </div>


    </div>
  )
}

export default Signup
