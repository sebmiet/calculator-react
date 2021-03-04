import React from 'react'

export const Keyboard = (props) => {
    const numButtons = [9,8,7,6,5,4,3,2,1,'#',0,'.'].map(btnValue => {
        return (<button className='btn-num'>{btnValue}</button>)    
      });
    return (
        <div>
            {numButtons}
        </div>
    )
}
