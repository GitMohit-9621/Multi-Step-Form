import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressBar from './ProgressBar';
import Popup from './Popup';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zipCode: '',
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const validateStep = () => {
    const currentErrors = {};
    if (step === 1) {
      if (!formData.fname) currentErrors.fname = 'First name is required';
      if (!formData.lname) currentErrors.lname = 'Last name is required';
      if (!formData.email) {
        currentErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        currentErrors.email = 'Email address is invalid';
      }
      if (!formData.phone) {
        currentErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        currentErrors.phone = 'Phone number is invalid';
      }
    } else if (step === 2) {
      if (!formData.street) currentErrors.street = 'Street is required';
      if (!formData.city) currentErrors.city = 'City is required';
      if (!formData.zipCode) {
        currentErrors.zipCode = 'Zip Code is required';
      } else if (!/^\d{5}$/.test(formData.zipCode)) {
        currentErrors.zipCode = 'Zip Code is invalid';
      }
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      setSubmittedData(formData);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setStep(4);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} errors={errors} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} errors={errors} />;
      case 3:
        return <Step3 formData={formData} />;
      case 4:
        return (
          <div>
            <h2>Submitted Data</h2>
            <p><strong>First Name:</strong> {submittedData.fname}</p>
            <p><strong>Last Name:</strong> {submittedData.lname}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Street:</strong> {submittedData.street}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>Zip Code:</strong> {submittedData.zipCode}</p>
            <button onClick={resetForm}>Reset Form</button>
          </div>
        );
      default:
        return null;
    }
  };

  const resetForm = () => {
    setFormData({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      zipCode: '',
    });
    setErrors({});
    setSubmittedData(null);
    setStep(1);
  };

  return (
    <div className="multi-step-form">
      <ProgressBar step={step} />
      {renderStep()}
      <div className="buttons">
        {step > 1 && step < 4 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
      {showPopup && <Popup message="Your form has been submitted!" onClose={closePopup} />}
    </div>
  );
};

export default MultiStepForm;
