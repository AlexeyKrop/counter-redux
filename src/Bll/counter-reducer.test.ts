import {
  counterReducer,
  IncrementCountAC,
  InitialStateType,
  ResetCountAC,
  SetValuesForSetDisplayAC
} from "./counter-reducer";

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
test('check reset count', () => {

  const startState: InitialStateType = {
    startValue: 0,
    maxValue: 10,
    count: 10
  }
  const action = ResetCountAC(0)
  const endState = counterReducer(startState, action)
  expect(endState).toStrictEqual({
    count: 0,
    maxValue: 10,
    startValue: 0,
  })
})
test('check set value in display', () => {

  const startState: InitialStateType = {
    startValue: 0,
    maxValue: 10,
    count: 10
  }
  const action = SetValuesForSetDisplayAC(2, 99)
  const endState = counterReducer(startState, action)
  expect(endState).toStrictEqual({
    count: 2,
    maxValue: 99,
    startValue: 2,
  })
})