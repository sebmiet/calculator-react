import React from 'react'

export const Keyboard = (props) => {
    const numButtons = [9,8,7,6,5,4,3,2,1,'#',0,'.'].map(btnValue => {
        return (<button key={btnValue} className='keyboard-btns-num'>{btnValue}</button>)    
      });
    const funButtons = ['AC', 'C', '+', '-', '*', '/', '=', '√'].map(btnValue => {
        return (<button key={btnValue} className='keyboard-btns-fun'>{btnValue}</button>)
    })
    return (
        <div className = "keyboard-container">
            <div>{numButtons}</div>
            <div>{funButtons}</div>
        </div>
        
    )
}
