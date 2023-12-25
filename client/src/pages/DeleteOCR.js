import React, { useState } from 'react';
import axios from 'axios';
import Button from '../component/Button';
const DeleteOCR = () => {
  const [identificationNumberToDelete, setIdentificationNumberToDelete] = useState('');

  const handleDelete = async () => {
    try {
      // Make a DELETE request to the backend API endpoint
      const response = await axios.delete(`/api/delete-ocr/${identificationNumberToDelete}`);
      
      // Check the response and handle accordingly
      if (response.data.success) {
        console.log('OCR data deleted successfully');
      } else {
        console.log('OCR data not found');
      }
    } catch (error) {
      console.error('Error deleting OCR data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Delete OCR Data</h1>
      <label>Enter Identification Number to delete:</label>
      <input
        type="text"
        value={identificationNumberToDelete}
        onChange={(e) => setIdentificationNumberToDelete(e.target.value)}
      />
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default DeleteOCR;
