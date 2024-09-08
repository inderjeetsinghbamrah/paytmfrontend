import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import PropTypes from "prop-types"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name= searchParams.get("name");
    const [amount, setAmount]= useState("");
    const navigate = useNavigate("");

    function transfer(){
        const userId = localStorage.getItem("userId")
        axios.post("http://localhost:5000/api/v1/account/transfer",{
            to: id,
            amount,
            userId
        },{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then(response=>{
            if(response.status==200)
                navigate("/dashboard",{state:{message:response.data.message}})
        })
    }
    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min max-w-md p-4 w-96 space-y-8 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col p-6">
                        <h2 className="font-bold text-3xl text-center">Send Money</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center ml-4">
                            <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{name}</h3>
                    </div>
                    <div className="mx-4">
                    <div>
                        <label className="text-sm font-semibold">Amount in (Rs.)</label>
                    </div>
                    <div className="py-4">
                        <input type="number" className="text-sm w-full border border-slate-200 p-2 rounded" placeholder="Enter Amount" onChange={(e)=>{
                            e.preventDefault();
                            setAmount(e.target.value);
                        }}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-500 text-sm text-white rounded-md hover:bg-green-600 p-2 w-full font-bold" onClick={transfer}>Initiate Transfer</button>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

SendMoney.propTypes={
    userId:PropTypes.string
}
