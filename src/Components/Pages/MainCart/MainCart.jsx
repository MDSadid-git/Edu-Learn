import React from 'react';
import { Icon } from '@iconify/react';

const MainCart = ({item}) => {
    function scrool() {
        return window.scrollTo(0, 0);
    }
    scrool()
    return (
        <div  className='max-w-[360px] m-5 shadow-xl shadow-gray-300/100 p-2 rounded-xl  mx-auto'>
                
                <div className='flex justify-center items-center'>
                

                <img src={`${item.image}`} alt="bag" className='hover:scale-110 ease-in-out duration-500 max-w-[300px] rounded-full'  />
                
                </div>
                <div className='m-4'>
                <h1 className='text-center text-2xl font-bold'>{item?.title}</h1>
                <p className='text-2xl font-bold'>{item.price}</p>
                <p>{item.descrtion}</p>

                </div>
                <div className='flex justify-around items-center'>
                    <button className='bg-rose-300 my-5 duration-300 py-2 px-6 rounded-xl hover:bg-rose-500'><Icon icon="fluent-mdl2:open-enrollment" /></button>
                    <div className='flex'>

                    <button><Icon icon="ps:lovedsgn" /></button>
                    <span className='mx-2'>Add to wishlist</span>
                    </div>
                </div>
            </div>
    );
};

export default MainCart;