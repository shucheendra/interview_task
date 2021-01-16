import React from 'react';
 import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => 
   {
       return <div className="list" key={item.key}>
         
     <p>
         <input type="text"  value={item.text}  onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}} />


          <span id="dropItem">{item.drops} </span>
           
        <span>
         
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={400} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;