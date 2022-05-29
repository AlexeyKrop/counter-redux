import {counterReducer, IncrementCountAC, InitialStateType} from "./counter-reducer";

test('check increment count', () => {

  const startState: InitialStateType = {
    startValue: 0,
    maxValue: 10,
    count: 0
  }
  const action = IncrementCountAC(1)
  const endState = counterReducer(startState, action)
  expect(endState).toBe({})
})