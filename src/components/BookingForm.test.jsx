import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest"; 
import BookingForm from "./BookingForm";
import '@testing-library/jest-dom'

test("Renders the date label in BookingForm", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const label = screen.getByText(/choose date/i);
  expect(label).toBeInTheDocument();
});
