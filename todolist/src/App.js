import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from "react"



function App() {

const [itemName,setItemName]=React.useState([])
const [status,setStatus]=React.useState([])

const enterItemName=(event)=>{
  event.preventDefault()
const todoname=event.target.todoname.value;

  setItemName(itemName=>[...itemName,todoname])
  setStatus(prevStatus => [...prevStatus, false]); 
  event.target.todoname.value="";
 

}  

const deleteItem=(index)=>{

  setItemName(prevItems=> prevItems.filter((v,i)=>i!==index))
  //setStatus(prevStatus => prevStatus.filter((_, i) => i !== index));

}

const getStatus=(index)=>{

  setStatus(prevStatus =>
    prevStatus.map((s, i) => (i === index ? !s : s)) // Toggle status for the specific index
  );
console.log(status)
}

const listItems=itemName.map((value,index)=>{
 
  return (
    <li className={status&&"strikeItem"} key={index} onClick={()=>getStatus(index)}>
      {value}
      <span><button onClick={()=>deleteItem(index)}>Delete Item</button></span>
    </li>
  );   

});


return (
    <div className="App">
     <Header/>
     <form onSubmit={enterItemName}>
      <input type="text" name="todoname" placeholder="enter the todo item" />
      <button >Add To Do Item</button>

     </form>
     <ul>
    {listItems}
    </ul>
    </div>
  );
}

export default App;
