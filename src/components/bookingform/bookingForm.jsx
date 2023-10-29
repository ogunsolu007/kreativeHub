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
  const [endDate, setEndDate] = useState(""); // To display the end date
  const [isConfirmationStep, setIsConfirmationStep] = useState(false);

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      fullName.trim() !== "" &&
      address.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      bookingDate.trim() !== "" &&
      numOfDays > 0
    );
  };

  // Calculate the total price when the number of days changes
  useEffect(() => {
    const pricePerDay = parseFloat(spacePrice.replace("£", ""));
    setTotalPrice((pricePerDay * numOfDays).toFixed(2));

    if (bookingDate && numOfDays) {
      const start = new Date(bookingDate);
      const end = new Date(start);
      end.setDate(start.getDate() + numOfDays);
      setEndDate(end.toISOString().split('T')[0]);
    }
  }, [numOfDays, spacePrice, bookingDate]);

  const handleConfirm = () => {
    setIsConfirmationStep(true);
  };

  const handleCancel = () => {
    setIsConfirmationStep(false);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send the data to your backend
    // Close the form after submission
    onClose();
  };

  return (
    <div className="booking-form">
      <h2>Book {spaceTitle}</h2>
      {isConfirmationStep ? (
        <div>
          <h3>Booking Summary for {spaceTitle}</h3>
          <div>
            <strong>Full Name:</strong> {fullName}
          </div>
          <div>
            <strong>Address:</strong> {address}
          </div>
          <div>
            <strong>Phone Number:</strong> {phoneNumber}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Booking Date:</strong> {bookingDate}
          </div>
          <div>
            <strong>Number of Days:</strong> {numOfDays}
          </div>
          <div>
            <strong>End Date:</strong> {endDate}
          </div>
          <div>
            <strong>Total Price:</strong> £{totalPrice}
          </div>
          <button onClick={handleSubmit}>Confirm Booking</button>
          <button onClick={handleCancel}>Go Back</button>
        </div>
      ) : (
        <div>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Booking Date:</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Number of Days:</label>
            <input
              type="number"
              value={numOfDays}
              onChange={(e) => setNumOfDays(e.target.value)}
              required
              min="1" // Minimum value is 1
            />
          </div>
          <div>
            <label>End Date:</label>
            <span>{endDate}</span>
          </div>
          <div>
            <label>Total Price:</label>
            <span>£{totalPrice}</span>
          </div>
          <button
            onClick={handleConfirm}
            disabled={!isFormValid()}
          >
            Confirm
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
