import React from 'react'

function Profile(prop){  //use of props 
  const red=()=>{
    alert("Want to login new page?")
  }

  return <div>
       <h1 onClick={red}>{prop.text}</h1>
       <p>Hello to my paragraph</p>
  </div>
}


export default Profile;