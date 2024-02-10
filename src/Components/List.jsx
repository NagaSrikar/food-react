import React, { useState } from 'react'
export default function List() {
  const [Todos, SetTodos] = useState([]);
  const [text, Settext] = useState("");
  const HandleButton = () => {
    if (text !== "") {
      SetTodos([...Todos, { id: Date.now(), value: text, isCompleted: false }]);
      Settext("");
    }
    else {
      alert("Please Enter Something!");
    };
  };
  const Checkbox = (index) => {
    const arr = [...Todos];
    arr[index].isCompleted = !arr[index].isCompleted;
    SetTodos(arr);
  };
  const HandleDeleteButton = (index) => {
    SetTodos(Todos.filter((todo, idx) => idx !== index))
  }
  return (
    <>
      <h1>TO DO'S...</h1>
      <div className='container'>
          <div>
            <input type="text" id="one" value={text} onChange={(e) => Settext(e.target.value)} placeholder='Enter your Todos here..' />
            <button onClick={HandleButton} id='first'>Add</button>
            <ul className='child'>
              {Todos.map((todo, index) => (
                <li id='items' key={todo.id} style={{ listStyle: 'none', textDecoration: todo.isCompleted ? 'line-through' : 'none', }}><input id='check' type="checkbox" onChange={(e) => Checkbox(index)} /><span style={{ textDecoration: Todos.isCompleted ? 'line-through' : 'none' }} >{todo.value}</span> <button id="second"onClick={() => HandleDeleteButton(index)}>Delete</button></li>
              ))}
            </ul>
          </div>
        
      </div>
    </>
  )
}
