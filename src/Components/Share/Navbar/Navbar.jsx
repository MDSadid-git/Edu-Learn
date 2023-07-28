// import React, { useState } from 'react';
// import logo from '../../Assist/logo.png'
// import { Link } from 'react-router-dom';
// import { Icon } from '@iconify/react';

// const Navbar = () => {
//   const [myNavBar, setMyNavBar] = useState(false)
//   const handleNavbar =()=>{
//     setMyNavBar(!myNavBar);
//   } 
//     const menuItems = (
//         <React.Fragment>
//            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b-2  md:my-4'>
//               <Link to='/'>Home</Link> 
//             </li>
//             <li  onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
//               <Link to='/about'>About</Link>
//             </li>
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
//               <Link to='/shop'>Shop</Link>
//             </li>
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
//               <Link to='/pages'>Pages</Link>
//             </li>
            
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
//               <Link to='/contact'>Contact</Link>
//             </li>
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
//               <Link to='/blog'>Blog</Link>
//             </li>
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
//               <Link to='/courses'>Courses</Link>
//             </li>
//             <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
//               <Link to='/blog'><span><Icon icon="material-symbols:shopping-cart" width="25px" /> </span></Link>
//             </li>
//         </React.Fragment>
//       );
//     return (
//         <>
          
//            <div className='fixed w-full h-[90px] shadow-lg z-[100] bg-slate-100'>
//             <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
//                 <Link to={'/'}>
                
//                 <img src={logo} alt="logo" className='w-20 h-12 cursor-pointer' />
//                 </Link>
//                 <div className=''>
//                 <ul  className='hidden md:flex'>
//                   {menuItems}
//                 </ul>
//                 </div>
//                 <div className='md:hidden' onClick={handleNavbar}><Icon icon="mdi:microsoft-xbox-controller-menu" width="30px" /></div>
//             </div>
//             <div className={myNavBar? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70': ''}>
//               <div className={myNavBar ? ' fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-slate-100 p-10 ease-out duration-700': ' fixed top-0 right-[-100%] w-[75%] ease-in-out duration-700'}>
//                 <div className='flex items-center justify-between'><Link to={'/'}>
                
//                 <img src={logo} alt="logo" className='w-20 h-12 cursor-pointer' />
//                 </Link>
                
//                 <div className='rounded-full p-3 shadow-lg hover:scale-125 hover:bg-slate-300 duration-300' onClick={handleNavbar}><Icon icon="ic:round-close" width="15px"  /></div>
//                 </div>
//               <div>
//                 <ul className='mt-5'>
//                  {menuItems}
//                 </ul>
//               </div>
//               </div>
//             </div>
//            </div>
//         </>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import logo from '../../Assist/logo.png'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [myNavBar, setMyNavBar] = useState(false)
  const handleNavbar =()=>{
    setMyNavBar(!myNavBar);
  } 
  const textmenu = {
    "menus" : [
        {
           "id" :1,
            "text": "home",
            "link": "/",
            "dropdown": [
                {
                    "id" :11,
                     "text": "home1",
                     "link": "/",
                     "dropdown": []
                 }, {
                    "id" :12,
                     "text": "home2",
                     "link": "/",
                     "dropdown": []
                 }
            ]
        }, 
        {
           "id" :1,
            "text": "home",
            "link": "/",
            "dropdown": []
        }, 
        {
           "id" :1,
            "text": "home",
            "link": "/",
            "dropdown": []
        }, 
        {
           "id" :1,
            "text": "home",
            "link": "/",
            "dropdown": []
        }, 
        {
           "id" :1,
            "text": "home",
            "link": "/",
            "dropdown": []
        }
    ]
}
    const menuItems = (
        <>
           <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b-2  md:my-4'>
              <Link to='/'>Home</Link> 
            </li>
            <li  onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
              <Link to='/about'>About</Link>
            </li>
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
              <Link to='/pages'>Pages</Link>
            </li>
            
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b md:my-4'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
              <Link to='/courses'>Courses</Link>
            </li>
            <li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercaseborder-b-transparent hover:border-b md:my-4'>
              <Link to='/blog'><span><Icon icon="material-symbols:shopping-cart" width="25px" /> </span></Link>
            </li>
        </>
      );
      const [menustate, setMenuState] = useState(false)
    return (
        <>
          
           <div className='fixed w-full h-[90px] shadow-lg z-[100] bg-slate-100'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link to={'/'}>
                
                <img src={logo} alt="logo" className='w-20 h-12 cursor-pointer' />
                </Link>
                <div className=''>
                <ul  className='hidden md:flex'>
                  {textmenu.menus.map((menu, i)=><li onClick={() => setMyNavBar(false)} className='ml-10 text-sm uppercase border-b-transparent hover:border-b-2  md:my-4'>
              <Link to='/'>Home</Link> 
              <ul>
            {menu?.dropdown?.map((menus, i )=><ul key={i}>
                    <li  
      onMouseEnter={()=>setMenuState(!menustate)} className={menustate? "hidden": "block"}>{menus.text}</li>
                </ul>)}
            </ul>
            </li>)}
                </ul>
                </div>
                <div className='md:hidden' onClick={handleNavbar}><Icon icon="mdi:microsoft-xbox-controller-menu" width="30px" /></div>
            </div>
            <div className={myNavBar? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/70': ''} onClick={() => setMyNavBar(false)}>
              <div className={myNavBar ? ' fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-slate-100 p-10 ease-out duration-700': ' fixed top-0 right-[-100%] w-[75%] ease-in-out duration-700'}>
                <div className='flex items-center justify-between'><Link to={'/'}>
                
                <img src={logo} alt="logo" className='w-20 h-12 cursor-pointer' />
                </Link>
                
                <div className='rounded-full p-3 shadow-lg hover:scale-125 hover:bg-slate-300 duration-300' onClick={handleNavbar}><Icon icon="ic:round-close" width="15px"  /></div>
                </div>
              <div>
                <ul className='mt-5' >
                 {menuItems}
                </ul>
              </div>
              </div>
            </div>
           </div>
        </>
    );
};

export default Navbar;