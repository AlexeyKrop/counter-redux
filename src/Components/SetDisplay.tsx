import React from 'react';
import Input from "./Input";
import {getMaxValueAC, getStartValueAC} from "../Bll/counter-reducer";
import {AppStoreType} from "../Bll/store";

const displaySettings = {
  width: '90%',
  minHeight: '126px',
  margin: "0 auto",
  border: '4px solid grey',
}
type setDisplayProps = {
  // getStartValue: (value: number) => void
  // getMaxValue: (value: number) => void
  // checkValue: () => void
  // startValue: number
  // maxValue: number
  store: AppStoreType
}

const SetDisplay = (props: any) => {
  const getStartValue = (value: number) => {
    if (value >= 0) {
      props.store.dispatch(getStartValueAC(value))
    }
  }
  const getMaxValue = (value: number) => {
    if (value >= 0) {
      props.store.dispatch(getMaxValueAC(value))
    }
  }
  const startValue = props.store.getState().counter.startValue
  const maxValue = props.store.getState().counter.maxValue
  console.log(maxValue)
  return (
    <div style={displaySettings}>
      <div className='counter__settings'><span>max value:</span>
        <Input value={maxValue} callBack={getMaxValue} type={'text'}/>
      </div>
      <div className='counter__settings'><span>start value:</span>
        <Input value={startValue} callBack={getStartValue} type={'text'}/>
      </div>
    </div>
  );
};

export default SetDisplay;