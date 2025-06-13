import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest"; 
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText(/Book a Table/i);
  expect(headingElement).toBeInTheDocument();
});
