import React from "react";
import CallToAction from "./CallToAction";
import BookingSlot from "./BookingSlot";

function Main({ availableTimes }) {
  return (
    <div>
      <CallToAction />

      {/* Display Available Slots on the Home Page */}
      <h2>Today's Available Slots</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => <BookingSlot key={time} time={time} />)
        ) : (
          <p>No slots available</p>
        )}
      </div>
    </div>
  );
}

export default Main;
