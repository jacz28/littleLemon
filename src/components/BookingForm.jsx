import React, { useState } from "react";
import { submitAPI } from "../api";
import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (newDate) {
      dispatch({ type: "UPDATE_DATE", payload: newDate.format("YYYY-MM-DD") });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { date: date?.format("YYYY-MM-DD"), time, guests, occasion };
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
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Make Your Reservation
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose date"
              value={date}
              onChange={handleDateChange}
              disablePast
              slotProps={{
                textField: {
                  fullWidth: true,
                  required: true,
                },
              }}
            />
          </LocalizationProvider>

          <FormControl fullWidth required>
            <InputLabel id="time-label">Choose time</InputLabel>
            <Select
              labelId="time-label"
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {availableTimes.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="guests"
            label="Number of Guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            inputProps={{ min: 1, max: 10 }}
            required
            fullWidth
          />

          <FormControl fullWidth required>
            <InputLabel id="occasion-label">Occasion</InputLabel>
            <Select
              labelId="occasion-label"
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <MenuItem value="Birthday">Birthday</MenuItem>
              <MenuItem value="Anniversary">Anniversary</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid}
            sx={{ width: "100%", py: 1.5, fontWeight: "bold" }}
          >
            Reserve Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default BookingForm;
