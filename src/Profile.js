import React from 'react'

function Profile(){
  const red=()=>{
    alert("Want to login new page?")
  }

  return <div>
       <h1 onClick={red}>Click Me to see Login pop up</h1>
  </div>
}


export default Profile;