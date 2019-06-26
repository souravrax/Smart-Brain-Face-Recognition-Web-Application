import React from 'react';
import './logo.css';


const Navigation = ()=>{
   return (
       <nav style ={{display: 'flex', 
                    justifyContent: 'flex-end',
                    alignItems:"center",
                    height: "22vh",
                    width:"100%",
                    backgroundColor:"rgb(228,228,228)",
                    position:"relative"
                    }}>
            <div className="logo" style={{
                backgroundColor:"white",
                alignItem:"flex-start",
                position:"absolute",
                left:"20px",
                }}>
                <img src="" alt=""/>
            </div>

            <h1 className="log-out" style={{
                margin:"20px"
            }}>Log Out</h1>

            
       </nav>
   );
}


export default Navigation;