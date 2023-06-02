import React from 'react';


let todoList = [
    {
        id: 1,
        title: "Complete assignment"
    },
    {
        id: 2,
        title: "Finish course"
    },
    {
        id: 3,
        title: "Build CV"
    }
]

function App() {
  return (
      <>
        <h1>Todo List</h1>
        <ul>
            {todoList.map( (item, idx) => {
                return <li key={idx}>{item.title}</li>
            })}
        </ul>
      </>

  );
}

export default App;
