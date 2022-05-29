import {counterReducer, IncrementCountAC, InitialStateType} from "./counter-reducer";

test('check increment count', () => {

  const startState: InitialStateType = {
    startValue: 0,
    maxValue: 10,
    count: 0
  }
  const action = IncrementCountAC(0)
  const endState = counterReducer(startState, action)
  expect(endState).toStrictEqual({
      count: 1,
      maxValue: 10,
      startValue: 0,
})
})