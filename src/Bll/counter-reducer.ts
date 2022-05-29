let initialState = {
  startValue: 0,
  maxValue: 10,
  count: 0
}

export type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType =  initialState, action: CounterReducerAT):InitialStateType => {

 switch (action.type) {
   case "SET_VALUES":
     return{
       ...state, startValue: action.startValue, maxValue: action.maxValue, count: action.startValue
     }
   case "INC_COUNT":
     return{
       ...state, count: action.count + 1
     }
   case "RESET_COUNT":
     return{
       ...state, count: action.count
     }
   default:
    return state
 }

}


export const SetValuesForSetDisplayAC = (startValue: number, maxValue: number) => ({type: 'SET_VALUES', startValue: startValue, maxValue: maxValue} as const)
export const IncrementCountAC = (count: number) => ({type: 'INC_COUNT', count: count} as const)
export const ResetCountAC = (count: number) => ({type: 'RESET_COUNT', count: count} as const)
type CounterReducerAT = SetValuesForSetDisplayAT | IncrementCountAT | ResetCountAT
type SetValuesForSetDisplayAT = ReturnType<typeof SetValuesForSetDisplayAC>
type IncrementCountAT = ReturnType<typeof IncrementCountAC>
type ResetCountAT = ReturnType<typeof ResetCountAC>
