import "./spacecard.css"
import { useState } from "react";

import BookingForm from "../bookingform/bookingForm";

function SpaceCard({ imageSrc, title, description, price }) {
    const [showBookingForm, setShowBookingForm] = useState(false);
  return (
    <div className="space-card">
      <div className="space-img">
        <img src={imageSrc} alt="desk" />
      </div>
      <div className="space-title">{title}</div>
      <div className="space-description">{description}</div>
      <div className="space-price">{price}</div>
      <button className="space-cta" onClick={() => setShowBookingForm(true)}>Book Now</button>

      {showBookingForm && (
        <BookingForm
          onClose={() => setShowBookingForm(false)}
          spaceTitle={title}
          spacePrice={price}
        />
      )}
    </div>
  );
}

export default SpaceCard;
