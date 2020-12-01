import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
class BoxForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      height: '',
      width: '',
      color: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit(e){
    e.preventDefault();
    let newBox = {...this.state, id: uuidv4()}
    this.props.addItem(newBox)
    this.setState({
      height: '',
      width:'',
      color:''
    }) 
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='height'>Height</label>
            <input
              id='height'
              name='height'
              type='text'
              onChange={this.handleChange}
              value={this.state.height}
            />
          <label htmlFor='width'>Width</label>
            <input
              id='width'
              name='width'
              type='text'
              onChange={this.handleChange}
              value={this.state.width}
            />
          <label htmlFor='color'>Color</label>
            <input
              id='color'
              name='color'
              type='text'
              onChange={this.handleChange}
              value={this.state.color}
            />
          <button>Create New Box</button>
        </form>
      </div>
    )
  }

}

export default BoxForm
