import React, {Component} from 'react'

class Box extends Component{

  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      key: this.props.key,
      height: this.props.height,
      width: this.props.width,
      color: this.props.color
    }
  }
  handleDelete = () => {
    this.props.deleteItem(this.state.id)
  }
  render(){
    
    return(
      <>
      <li
        key={this.state.key}
        style={{
          height: `${this.state.height}em`, 
          width: `${this.state.width}em`, 
          backgroundColor: `${this.state.color}`
        }}
      >
      </li>
      <button onClick={this.handleDelete}>Delete</button>    
      </>
    )
  }
}

export default Box