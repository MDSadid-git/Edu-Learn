import React from "react";
import useTitle from "../../Hook/Hook";

const cheakOut = () => {
  const onSubmit = (data)=>{
    console.log(data)
  }
  function scrool() {
    return window.scrollTo(0, 0);
  }
  scrool()
  // useTitle("Cheak Out");
  return (
    <div className='w-full md:w-1/3  mx-auto my-10 p-5 border rounded border-[#003262]' data-aos="fade-up" data-aos-duration="1000">
    <h1 className='text-center text-3xl font-semibold text-[#003262] mb-10'>Payment form</h1>
    <form >
        <div className='my-2'>
            <label className='font-semibold'>Name</label>
            <input type='text' className='w-full border-2 p-2 my-2 rounded'  placeholder='Name' required />
        </div>
        <div className='my-2'>
            <label className='font-semibold'>Email Address</label>
            <input type='email' className='w-full border-2 p-2 my-2 rounded'  placeholder='Email' required />
        </div>
        <div className='my-2'>
            <label className='font-semibold'>Card Number</label>
            <input type='text' className='w-full border-2 p-2 my-2 rounded'  placeholder='xxxx xxxx xxxx xxxx' required />
        </div>
        <div className='my-2'>
            <label className='font-semibold'>Password</label>
            <input type='password' className='w-full border-2 p-2 my-2 rounded'  placeholder='xxxx xxxx xxxx xxxx' required />
        </div>
        <div className="flex my-2">
        <div className='mr-2'>
            <label className='font-semibold'>Date</label>
            <input type='date' className='w-full border-2 p-2 my-2 rounded' placeholder='mm / yy' required />
        </div>
        <div className='ml-2'>
            <label className='font-semibold'>CVV</label>
            <input type='text' className='w-full border-2 p-2 my-2 rounded'placeholder='xxx' required />
        </div>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">$ 129.99</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-semibold">Tax Fee</p>
          <p className="font-semibold">$ 4.99</p>
        </div>
        <hr className="border-b my-2" />
        <div className="flex justify-between my-2">
          <p className="font-semibold">Total Amount</p>
          <p className="font-semibold">$ 134.98  USD</p>
        </div>
        <div>
            <button className='w-full text-center transition duration-500 hover:bg-[#5ac3ff] bg-[#003262] text-white rounded font-semibold text-lg my-3 py-3' type='submit'>Make Payment</button>
        </div>


    </form>
</div>
  );
};

export default cheakOut;