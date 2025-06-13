import React from "react";

function BookingSlot({ time }) {
  return (
    <div style={{ padding: "10px", border: "1px solid black", margin: "5px" }}>
      {time}
    </div>
  );
}

export default BookingSlot;
