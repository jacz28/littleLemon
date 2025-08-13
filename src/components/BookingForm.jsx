import React, { useState } from "react";
import { submitAPI } from "../api"; // ✅ import it here

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE_DATE", payload: newDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
    const success = submitAPI(formData);
    if (success) {
      alert("✅ Reservation submitted!");
    } else {
      alert("❌ Reservation failed!");
    }
  };

  const isFormValid = date && time && guests >= 1 && occasion;


  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
  type="date"
  id="res-date"
  value={date}
  onChange={handleDateChange}
  required
  min={new Date().toISOString().split("T")[0]} // ✅ no past dates
/>

<select
  id="res-time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
  required
>
  <option value="">Select time</option> {/* placeholder */}
  {availableTimes.map((time) => (
    <option key={time} value={time}>{time}</option>
  ))}
</select>

<input
  type="number"
  id="guests"
  value={guests}
  onChange={(e) => setGuests(Number(e.target.value))}
  min={1}
  max={10}
  required
/>

<select
  id="occasion"
  value={occasion}
  onChange={(e) => setOccasion(e.target.value)}
  required
>
  <option value="">Select occasion</option> {/* placeholder */}
  <option>Birthday</option>
  <option>Anniversary</option>
</select>


      <input type="submit" value="Make Your Reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;
