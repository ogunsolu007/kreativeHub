import React, { useState, useEffect } from "react";
import "./bookingForm.css"

function BookingForm({ onClose, spaceTitle, spacePrice }) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [numOfDays, setNumOfDays] = useState(1); // Default to 1 day
  const [totalPrice, setTotalPrice] = useState(spacePrice);

  // Calculate the total price when the number of days changes
  useEffect(() => {
    const pricePerDay = parseFloat(spacePrice.replace("£", ""));
    setTotalPrice((pricePerDay * numOfDays).toFixed(2));
  }, [numOfDays, spacePrice]);

  const handleSubmit = () => {
    // Handle form submission, e.g., send the data to your backend
    // Close the form after submission
    onClose();
  };

  return (
    <div className="booking-form">
      <h2>Book {spaceTitle}</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Booking Start Date:</label>
        <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
      </div>
      <div>
        <label>Number of Days:</label>
        <input type="number" value={numOfDays} onChange={(e) => setNumOfDays(e.target.value)} />
      </div>
      <div>
        <label>Total Price:</label>
        <span>£{totalPrice}</span>
      </div>
      <button onClick={handleSubmit}>Submit Booking</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default BookingForm;
