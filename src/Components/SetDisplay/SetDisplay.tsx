import React, {useState} from 'react';
import Input from "../Input";
import Button from "../Button";
import s from './SetDisplay.module.css'
const displaySettings = {
  width: '90%',
  minHeight: '126px',
  margin: "0 auto",
  border: '4px solid grey',
}
type setDisplayProps = {
  setValues: (startValue: number, maxValue: number) => void
  startValue: number
  maxValue: number
}

const SetDisplay = (props: setDisplayProps) => {
  const [startValue, setStartValue] = useState(props.startValue)
  const [maxValue, setMaxValue] = useState(props.maxValue)
  let [error, setError] = useState('')

  const getStartValue = (value: number) => {
    if (value >= 0) {
      setStartValue(value)
    }
  }

  const getMaxValue = (value: number) => {
    if (value >= 0) {
      setMaxValue(value)
    }
  }

  const setValues = () => {
    props.setValues(startValue, maxValue)
  }

  const checkValue = () => {
    if(maxValue < startValue){
      setError('start value must be less than the maximum value')
    }else{
      setError('')
    }
  }

  return (
    <>
    <div style={displaySettings}>
      { {error} && <span className={s.errorText}>{error}</span>}
      <div className='counter__settings'><span>max value:</span>
        <Input value={maxValue} callBack={getMaxValue} checkValue={checkValue} type={'text'}/>
      </div>
      <div className='counter__settings'><span>start value:</span>
        <Input value={startValue} callBack={getStartValue} checkValue={checkValue} type={'text'}/>
      </div>
    </div>
      <div className="button__group button__group_settings">
        <Button disabled={startValue >= maxValue} callBack={setValues} name={'Set'}/>
      </div>
    </>
  );
};

export default SetDisplay;