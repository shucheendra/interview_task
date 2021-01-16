import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
     
      currentItem:{
        text:'',
        drops: '',
        key:''
      }
    }
  
  }
  nameHandler = (e) =>{
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  dropHandler = (e) => {
    this.setState({
      currentItem:{
        drops: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (e) =>{
   // console.log(`details: ${this.state.currentItem.drops} ${this.state.currentItem.text}`)
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        drops:'',
        key:''
      }
    })
    }
  }
  deleteItem = (key) =>{
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate = (text,key) => {
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    
      <header>
        <div className="nav">User Listing</div>
        <div className="mainContent">
        <form id="to-do-form" onSubmit={this.addItem}>
          <h3>Create User</h3>
          <input type="text" placeholder="User name" value= {this.state.currentItem.text} onChange={this.nameHandler}></input>
        <br></br>
         <select onChange={this.dropHandler} value={this.state.drops} placeholder="Access">
          <option>Access type</option>
           <option value="admin">Admin</option>
           <option value="view">View</option>
           <option value="edit">Edit</option>
         </select> <br></br>
          <button type="submit">Save</button>
        </form>
        </div>
        <div className="App">
        {/* <p>{this.state.drops}</p> */}
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}
         />
        
     
    </div> </header>
  );
 }
}


export default App;