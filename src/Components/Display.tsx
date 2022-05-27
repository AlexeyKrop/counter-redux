import React from 'react';
import Button from "./Button";

const display = {
  width: '100%',
  minHeight: '100px',
}
const count = {
  fontSize: '90px',
  fontWeight: '900'
}
type displayPropsType = {
  count: number
  maxCount: number
  startCount: number
  disabled: boolean
  getCounterIncrement: () => void
  getResetICount: () => void
  error: string
}

const Display: React.FC<displayPropsType> = (props) => {
  return (
    <>
    <div style={display}>
      <span className={props.error ? 'errorText' : ''}>{props.error}</span>
      <div className='counter'>
        <span style={count}
              className={props.count === props.maxCount ? 'styleIfCountOff' : 'styleIfCountReset'}>{props.count}</span>
      </div>
    </div>
  <div className="button__group">
    <Button disabled={props.disabled} callBack={props.getCounterIncrement} name={'Inc'}/>
    <Button disabled={props.count === props.startCount || props.maxCount < props.startCount || props.count === 0} callBack={props.getResetICount} name={'Reset'}/>
  </div>
    </>
  );
};

export default Display;