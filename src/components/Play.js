import React from 'react'
import Swap from './Swap'

export default function Play(props){
    return(
        <div>      
          {props.openSwap ? 
            <Swap setOpenSwap={props.setOpenSwap}  openSwap={props.openSwap} />
          : null}
        </div>
    )
}