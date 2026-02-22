import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { toast } from "react-toastify";

export default function Verify() {

    const [searchParams,setSearchParams]= useSearchParams();
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate= useNavigate();


    const verifyPayment=async()=>{
      const response=await axios.post(url+"/api/order/verify",{success, orderId})
      console.log(response.data);
      
      if(response.data.success){
        toast.success("Order placed successfully");
        navigate("/myorders")
      }
      else{
        navigate("/")
      }
    }

    useEffect(()=>{
      verifyPayment()
    },[])
  return (
    <div className='verify'>
        <div className='spinner'></div>
    </div>
  )
}


