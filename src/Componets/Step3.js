import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Review Your Details</h2>
      <p><strong>First Name:</strong> {formData.fname}</p>
      <p><strong>Last Name:</strong> {formData.lname}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Street:</strong> {formData.street}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Zip Code:</strong> {formData.zipCode}</p>
    </div>
  );
};

export default Step3;
