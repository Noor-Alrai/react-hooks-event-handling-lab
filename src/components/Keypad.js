import React from "react";
// Code Keypad Component Here

function Keypad (){

    function onChangeHandler(){
     console.log('Entering password...');
     }
     return (
        <div>
            <input type="password"  onChange={onChangeHandler}/>
        </div>
    )
}

export default Keypad;