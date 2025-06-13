// src/api.js
export const fetchAPI = (date) => {
  // Simulate different times for demonstration
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return times.filter((_, i) => (new Date(date).getDate() + i) % 2 === 0);
};

export const submitAPI = (formData) => {
  console.log("Submitted reservation:", formData);
  return true; // Simulate a successful submission
};
