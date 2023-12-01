import React, { useState } from "react";

function Form(props) {
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [userInput3, setUserInput3] = useState("");
  const textHandleChange = (e) => {
    setUserInput1(e.target.value);
  };
  const numHandleChange = (e) => {
    setUserInput2(e.target.value);
  };
  const catHandleChange = (e) => {
    setUserInput3(e.target.value);
  };

  const sendData=(e)=>{
    e.preventDefault();
    const id=Math.random().toString();
    const data={"text":userInput1, "number":userInput2,"category":userInput3,"id":id};
    props.submit(data);
    localStorage.setItem(id,[data.text,data.number,data.category]);
    setUserInput1("");
    setUserInput2("");
    setUserInput3("");
  }
  return (
    <form onSubmit={sendData}>
      <label> Enter text</label>
      <input type="text" value={userInput1} onChange={textHandleChange} />
      <label> Enter number</label>
      <input type="number" value={userInput2} onChange={numHandleChange}/>
      <label> Enter category</label>
      <input list="category" value={userInput3} onChange={catHandleChange} />
          <datalist id="category">
            <option value={"Electronics"} />
            <option value={"Food"} />
            <option value={"Skincare"} />
          </datalist>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
