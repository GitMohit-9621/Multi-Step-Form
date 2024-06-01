import React from 'react';

const Step1 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>User Information</h2>
      <label>
        First Name:
        <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        {errors.fname && <span className="error">{errors.fname}</span>}
      </label>
      <label>
        Last Name:
        <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        {errors.lname && <span className="error">{errors.lname}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </label>
    </div>
  );
};

export default Step1;
