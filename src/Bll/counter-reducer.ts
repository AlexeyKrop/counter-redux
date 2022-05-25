let initialState = {
  startValue: 0,
  maxValue: 10,
}

type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType =  initialState, action: CounterReducerAT):InitialStateType => {
 switch (action.type) {
   case "SET_VALUES":
     return{
       ...state, startValue: action.startValue, maxValue: action.maxValue
     }
   default:
    return state
 }

}


export const SetValuesForSetDisplayAC = (startValue: number, maxValue: number) => ({type: 'SET_VALUES', startValue: startValue, maxValue: maxValue} as const)
type CounterReducerAT = SetValuesForSetDisplayAT
type SetValuesForSetDisplayAT = ReturnType<typeof SetValuesForSetDisplayAC>
