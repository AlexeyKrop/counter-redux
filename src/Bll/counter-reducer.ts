const initialState = {
  startValue: 0
}
type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType =  initialState, action: CounterReducerAT):InitialStateType => {
  return state
}


export const getStartValueAC = (value: number) => ({type: 'GET_START_VALUE', startValue: value} as const)
type CounterReducerAT = GetStartValueAT
type GetStartValueAT = ReturnType<typeof getStartValueAC>