import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import './App.css';
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api"; // ✅ import from local file

const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_DATE") {
    return fetchAPI(action.payload);
  }
  return state;
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) navigate("/confirmation"); // ✅ go to confirmation
  };

  return (
    <div className="app-container">
    <Header />
    <Nav />
    <main>
    <Routes>
      <Route path="/" element={<Main availableTimes={availableTimes} />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmation" element={<ConfirmedBooking />} />
    </Routes>
    </main>
    <Footer />
  </div>
  );
}

export { initializeTimes, updateTimes };
export default App;
