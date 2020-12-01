import React, {Component} from 'react'
import Box from './Box'
import BoxForm from './BoxForm'


class BoxComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      rectangles: [],
      circles: [],
      triangles: []
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  
  deleteItem(id){
    this.setState({
      rectangles: this.state.rectangles.filter(x =>
        x.id !== id)
    })  
  }
  addItem(newItem){
    this.setState({
      rectangles: [...this.state.rectangles, newItem]
    })
  }
  render(){
    const boxes = this.state.rectangles.map(x=>( 
      
        <Box
          key={x.id}
          id={x.id} 
          height={x.height}
          width={x.width}
          color={x.color}
          deleteItem={this.deleteItem}
        />   
      
    ))
    return(
      <div className='BoxComponent'>
        {/* <label htmlFor="shape">Choose a shape:</label>
        <select name="shape" id="shape">
          <option value="rectangles">Rectangles</option>
          <option value="circles">Circles</option>
          <option value="triangles">Triangles</option>
        </select>
        {this.state.shape} */}
        <div>
          <BoxForm 
            addItem={this.addItem}
          /><hr/>
          <ul>
          {boxes}
          </ul>
        </div>
      </div>
    )
  }

}

export default BoxComponent