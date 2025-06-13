import React from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div>
      <h1>Reserve a Table</h1>

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

    </div>
  );
}

export default BookingPage;
