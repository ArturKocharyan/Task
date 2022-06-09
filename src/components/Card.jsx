import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

function Card({children, onDelete}){
    return(
        <div style={{
            height:'70px',
            width: '130px',
            border: '1px solid black',
            display: 'inline-flex',
            margin: '10px',
            position:'relative'
        }} >
            <div
            style={{
                position:'absolute',
                right:'0'
            }}
            onClick={onDelete}
            >
            <ClearIcon style={{
                
                
            }}/>
            </div>
            <div style={{
                margin: 'auto'

            }} >
            <p>{children}</p>
            </div>
            

        </div>
    )
}

export default Card