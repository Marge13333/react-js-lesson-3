import React from 'react';

function Component (props){
    const FirstComponentArr= props.FirstComponentArr
    return <div>
        <ul>
            {FirstComponentArr.map(( e)=> (
                <li key={e}><div>{e}</div></li>
            ))}
        </ul>
    </div>
}
export default Component 