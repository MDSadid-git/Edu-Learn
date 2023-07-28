import React, { useEffect, useState } from 'react';

const MainNavbar = () => {
    const [myData, setMyData] = useState([])
    useEffect(()=>{
        fetch('menus.json',)
      .then(res=>res.json()).then(data => setMyData(data))
    },[])
    // console.log(myData.menus);
    const {menus} = myData
    console.log(menus?.[0].dropdown);
    return (
        <div>
            <ul>
            {menus?.map((menu, i )=> <li key={i}>
            <a>{menu.text}</a>
            <ul>
            {menu?.dropdown?.map((menus, i )=><ul key={i}>
                    <li>{menus.text}</li>
                </ul>)}
            </ul>
            </li>)}
            </ul>
            
        </div>
    );
};

export default MainNavbar;