import './App.css';
import { React, useState } from 'react';

function App() {
  let [item, setItem] = useState([]);
  // const [data, setData] = useState([]);
  function enterData(event) {
    event.preventDefault();
    const [idsElement] = event.target;
    item.push(idsElement.value);
    console.log(item);
  }
  return (
    <>
      <div className="main">
        <div className="body">
          <br />
          <h1 className='title'>Zia, Noor and Anosha's ToDo List</h1>
          <br />
          <div className='input'>
            <form onSubmit={enterData}>
              <input type="text" name='ids' placeholder="Enter ID" />
              {/* <input type="text" id='ids' placeholder="Enter Details" />
              <input type="date" id='date' placeholder="Enter Due Date" /> */}
              <button type='submit'>Add</button> 
            </form>
          </div>
          <ol>
            {item.map((item) => {
              return <li>{item}</li>
            })}
          </ol>
        </div >
      </div >
    </>
  );
}
export default App;
