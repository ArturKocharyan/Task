import React from "react";

function Button({text,onClick}){
    return(
        <button style={{
          width:'90px',
          color: "white",
          backgroundColor: 'blueviolet',
          borderRadius: '15px'
        }} onClick={onClick}>{text}</button>
    )
}

export default Button