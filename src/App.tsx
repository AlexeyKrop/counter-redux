import React, {useState} from 'react';
import './App.css';
import SetDisplay from "./Components/SetDisplay/SetDisplay";
import Display from "./Components/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Bll/store";
import {IncrementCountAC, ResetCountAC, SetValuesForSetDisplayAC} from "./Bll/counter-reducer";

function App() {
  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
  const count = useSelector<AppStateType, number>(state => state.counter.count)
  let [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()


  const setValueInSetDisplay = (startValue: number, maxValue: number) => {
    setDisabled(!disabled)
    dispatch(SetValuesForSetDisplayAC(startValue, maxValue))
  }

  const getCounterIncrement = () => {
    if(count === maxValue - 1){
      setDisabled(true)
    }
    dispatch(IncrementCountAC(count))
  }

  const getResetICount = () => {
    dispatch(ResetCountAC(startValue))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper-counter">
          <Display getCounterIncrement={getCounterIncrement} getResetICount={getResetICount} disabled={disabled} count={count} maxCount={maxValue} startCount = {startValue}  error={''}/>
        </div>
        <div className="wrapper-counter wrapper-counter__setting">
          <SetDisplay setValues={setValueInSetDisplay} startValue={startValue} maxValue={maxValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
