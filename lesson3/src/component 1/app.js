import React from 'react';
import Component from "../comp 2/app"

function SecondComponent (){
    const SecondArr = [1,2,3,4,5]
    return <div><Component FirstComponentArr={SecondArr} /></div>


}
export default SecondComponent



