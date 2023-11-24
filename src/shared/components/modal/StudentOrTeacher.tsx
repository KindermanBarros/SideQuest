import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const StudentOrTeacherModal: React.FC<ModalProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Selected option:', selectedOption);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Choose an option:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="student"
            checked={selectedOption === 'student'}
            onChange={handleOptionChange}
          />
          Student
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="teacher"
            checked={selectedOption === 'teacher'}
            onChange={handleOptionChange}
          />
          Teacher
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudentOrTeacherModal;
