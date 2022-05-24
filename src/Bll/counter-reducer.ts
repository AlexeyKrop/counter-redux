let initialState = {
  startValue: 0,
  maxValue: 0,
}
type InitialStateType = typeof initialState
export const counterReducer = (state:InitialStateType =  initialState, action: CounterReducerAT):InitialStateType => {
  switch (action.type) {
    case "GET_START_VALUE":
      return{
        ...state, startValue: action.startValue
      }
    case "GET_MAX_VALUE":
      return{
        ...state, maxValue: action.maxValue
      }
    default:
      return state
  }
}


export const getStartValueAC = (value: number) => ({type: 'GET_START_VALUE', startValue: value} as const)
export const getMaxValueAC = (value: number) => ({type: 'GET_MAX_VALUE', maxValue: value} as const)
type CounterReducerAT = GetStartValueAT | GetMaxValueAT
type GetStartValueAT = ReturnType<typeof getStartValueAC>
type GetMaxValueAT = ReturnType<typeof getMaxValueAC>