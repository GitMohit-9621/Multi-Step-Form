
import React from 'react';

const Step2 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Address</h2>
      <label>
        Street:
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
        {errors.street && <span className="error">{errors.street}</span>}
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span className="error">{errors.city}</span>}
      </label>
      <label>
        Zip Code:
        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
      </label>
    </div>
  );
};

export default Step2;
