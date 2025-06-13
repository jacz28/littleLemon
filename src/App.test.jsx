import { initializeTimes, updateTimes } from "./App"; 

test("initializeTimes returns correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes returns the same state when given UPDATE_DATE action", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_DATE" };
  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual(initialState);
});
