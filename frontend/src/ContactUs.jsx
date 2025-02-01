import React from 'react';
import './ContactUs.css'; // You can style it as you prefer
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';  // Using Google Maps API

const ContactUs = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  // Coordinates for AUST (Adjust these to the exact location of AUST)
  const center = {
    lat: 23.8103,  // Example latitude for AUST
    lng: 90.4125,  // Example longitude for AUST
  };

  return (
    <div className="contact-us-container">
      <h2>Get in Touch</h2>

      {/* Address and Contact Info */}
      <div className="contact-info">
        <p><strong>Address:</strong> AUST, Tejgaon, Dhaka, Bangladesh</p>
        <p><strong>Email:</strong> info@aust.edu.bd</p>
        <p><strong>Phone:</strong> +880 2-887-2657</p>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com/austbd">Facebook</a></li>
          <li><a href="https://twitter.com/austbd">Twitter</a></li>
          <li><a href="https://www.linkedin.com/school/austbd">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
