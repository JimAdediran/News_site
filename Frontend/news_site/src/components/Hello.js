import React from 'react'



function Hello(props) {

    function Clickme() {
        alert("Button Is Clicked");
    }

    return(

       <div>

        <h1>My name is: {props.name}</h1>
        <button onClick={Clickme}>Click Me</button>
       </div>
    )
    

}

export default Hello;