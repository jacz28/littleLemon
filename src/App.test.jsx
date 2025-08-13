import { test, expect, vi, describe, beforeEach } from "vitest";
import { initializeTimes, updateTimes } from "./App";
import * as api from "./api"; 

vi.mock("./api");

describe("Booking logic", () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  beforeEach(() => {
    vi.clearAllMocks(); 
    api.fetchAPI.mockReturnValue(mockTimes); 
  });

  test("initializeTimes returns today's available times", () => {
    const result = initializeTimes();
    expect(result).toEqual(mockTimes); 
    expect(api.fetchAPI).toHaveBeenCalledTimes(1); 
  });

  test("updateTimes returns available times for selected date", () => {
    const date = "2025-06-11";
    const result = updateTimes([], { type: "UPDATE_DATE", payload: date });
    expect(result).toEqual(mockTimes); 
    expect(api.fetchAPI).toHaveBeenCalledWith(date); 
  });
});
