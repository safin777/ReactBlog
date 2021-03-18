import React from 'react'


class State extends React.Component{
  constructor(){
    super()
    this.state={
      name:'safin',
      age:'24',
      village:'Rangunia'
    }
  }
  render(){
    return(
      <div>
        <p>{this.state.name}<br></br>{this.state.village}</p>
      </div>
    )
    }
}

export default State;