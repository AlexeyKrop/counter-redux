let initialState = {
  startValue: 0,
  maxValue: 10,
  count: 0
}

type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType =  initialState, action: CounterReducerAT):InitialStateType => {

 switch (action.type) {
   case "SET_VALUES":
     return{
       ...state, startValue: action.startValue, maxValue: action.maxValue
     }
   case "INC_COUNT":
     return{
       ...state, count: action.count + 1
     }
   default:
    return state
 }

}


export const SetValuesForSetDisplayAC = (startValue: number, maxValue: number) => ({type: 'SET_VALUES', startValue: startValue, maxValue: maxValue} as const)
export const IncrementCountAC = (count: number) => ({type: 'INC_COUNT', count: count} as const)
type CounterReducerAT = SetValuesForSetDisplayAT | IncrementCountAT
type SetValuesForSetDisplayAT = ReturnType<typeof SetValuesForSetDisplayAC>
type IncrementCountAT = ReturnType<typeof IncrementCountAC>
