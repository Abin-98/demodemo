import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Button from "./Button";
function App() {
  const [items, setItems] = useState([]);

  const getData = (data) => {
    setItems((prev) => {
      const updated=[...prev];
      updated.unshift(data);
      return updated;
    });
  };

  const deleteItem=(ID)=>{
    setItems((prev)=>{
      const updated=prev.filter((item)=>item.id!==ID)
      return updated;
    });
    localStorage.removeItem(ID);
  }
  return (
    <div>
      <h1>Hello</h1>
      <Form submit={getData} />
      <div>
        <h2>Electronics</h2>
      <div>{items.filter((item)=>item.category==="Electronics").map((e, i) => {
        return <li key={i}>{e.text}-{e.number}<Button id={e.id} onClick={deleteItem}>Delete</Button></li>;
      })} 
      </div>
      </div>
      <div>
      <h2>Food</h2>
      <div>{items.filter((item)=>item.category==="Food").map((e, i) => {
        return <li key={i}>{e.text}-{e.number}<Button id={e.id} onClick={deleteItem}>Delete</Button></li>;
      })} 
      </div>
      </div>
      <div>
        <h2>Skincare</h2>
        <div>{items.filter((item)=>item.category==="Skincare").map((e, i) => {
        return <li key={i}>{e.text}-{e.number} <Button id={e.id} onClick={deleteItem}>Delete</Button></li>;
      })} 
      </div>
      </div>
    </div>
  );
}
export default App;
