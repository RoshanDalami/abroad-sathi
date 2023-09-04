"use client";

//module imports
import Image from "next/image";
import { useEffect, useState } from "react";

//images and comp. import
import getintouch from "@/Images/getintouch.svg";
import underline from "@/Images/underline_two.svg";

export default function GetInTouch() {
  const [formData, setFormData] = useState({});
  const [isNumberValid,setIsNumberValid] = useState(true);


  const onSubmit =(e)=>{
    e.preventDefault();
    if(formData.phone?.length !== 10){
      setIsNumberValid(false);
      console.log('not a number')
      return 
    }
    setIsNumberValid(true)
    setFormData({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      message:''
    })
    console.log(formData)
  }

  return (
    <div className="flex items-center justify-center md:justify-between px-10 py-10 bg-[#F3F3F3] bg-gradient-to-t from-[#0148a52c] to-white flex-wrap">
      <section className="flex flex-col gap-6 w-[50%]">
        <h1 className="text-[40px] text-[#3D3D3D] font-bold">GET IN TOUCH</h1>
        <Image
          src={underline}
          alt="underline"
          className="absolute mt-[50px] md:mt-[50px] md:ml-[150px]"
        />
        <p className="text-[28px] text-[#3D3D3D]">
          We would love to hear from you.
        </p>

        <form className="text-[#3D3D3D] flex flex-col gap-6  ">
          <div className="flex gap-6 flex-col md:flex-row  ">
            <section className="flex flex-col w-[100%]">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="py-2 px-3 border-[1px] border-[#3D3D3D] rounded"
                onChange={(e) => {
                  setFormData({ ...formData, firstname: e.target.value });
                }}
                value={formData.firstname}
              />
            </section>
            <section className="flex flex-col w-[100%]">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="py-2 px-3 border-[1px] border-[#3D3D3D] rounded"
                onChange={(e) => {
                  setFormData({ ...formData, lastname: e.target.value });
                }}
                value={formData.lastname}
              />
            </section>
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-3 border-[1px] border-[#3D3D3D] rounded"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              className="py-2 px-3 border-[1px] border-[#3D3D3D] rounded"
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              value={formData.phone}
            />
            {!isNumberValid  && <p className="text-red-600"> please enter valid number </p>}
          </div>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              placeholder="Leave us a message"
              className=" border-[1px] border-[#3D3D3D] rounded p-3"
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
              value={formData.message}
            />
          </div>
        </form>
        <button className="bg-[#0149A5] text-white py-2 rounded" onClick={onSubmit}>
          SEND MESSAGE
        </button>
      </section>
      <section className="hidden md:block">
        <Image src={getintouch} alt="get in touch image" />
      </section>
    </div>
  );
}
