import React from 'react';
import './App.css';
import Button from "./Components/Button";
import SetDisplay from "./Components/SetDisplay";
import Display from "./Components/Display";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper-counter">
          <Display count={0} maxCount={0} error={''}/>
          <div className="button__group">
            <Button name={'Inc'}/>
            <Button name={'Reset'}/>
          </div>
        </div>
        <div className="wrapper-counter wrapper-counter__setting">
          <SetDisplay/>
          <div className="button__group button__group_settings">
            <Button name={'Set'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
