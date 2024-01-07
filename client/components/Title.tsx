import React, {memo} from 'react';
import {Outlet} from 'react-router-dom';


const Title = memo(() => {
    console.log('title is rendering again!');

    //popshap icon
    return (
        <>
            <div className="titleBar">

                <img className="img" src='images/logo.png'></img>
            </div>
            <Outlet/>
  
        </>
  
    )

});

export default Title;