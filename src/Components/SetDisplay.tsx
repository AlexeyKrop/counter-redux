import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const displaySettings = {
  width: '90%',
  minHeight: '126px',
  margin: "0 auto",
  border: '4px solid grey',
}
type setDisplayProps = {
  setValues: (startValue: number, maxValue: number) => void
  // getStartValue: (value: number) => void
  // getMaxValue: (value: number) => void
  // checkValue: () => void
  startValue: number
  maxValue: number

}

const SetDisplay = (props: setDisplayProps) => {
  //useSelect
  //useDispatch
  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
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

  return (
    <>
    <div style={displaySettings}>
      <div className='counter__settings'><span>max value:</span>
        <Input value={maxValue} callBack={getMaxValue} type={'text'}/>
      </div>
      <div className='counter__settings'><span>start value:</span>
        <Input value={startValue} callBack={getStartValue} type={'text'}/>
      </div>
    </div>
      <div className="button__group button__group_settings">
        <Button callBack={setValues} name={'Set'}/>
      </div>
    </>
  );
};

export default SetDisplay;