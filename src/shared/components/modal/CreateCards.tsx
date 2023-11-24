import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputField from '../inputField/InputField';

interface CreateCardsModalProps {
    onClose: () => void;
  }

  const CreateCardsModal: React.FC<CreateCardsModalProps> = ({ onClose }) => {

  const [pergunta, setPergunta] = useState('');
  const [resposta1, setResposta1] = useState('');
  const [resposta2, setResposta2] = useState('');
  const [resposta3, setResposta3] = useState('');
  const [resposta4, setResposta4] = useState('');

  const handlePerguntaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPergunta(event.target.value);
  };

  const handleResposta1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResposta1(event.target.value);
  };

  const handleResposta2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResposta2(event.target.value);
  };

  const handleResposta3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResposta3(event.target.value);
  };

  const handleResposta4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResposta4(event.target.value);
  };

  const handleOkClick = () => {
    onClose();
  };


    return (
        <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'secondary.main',
            borderRadius: '10px',
            zIndex: 9999, 
            padding: '20px' 
          }}>
        <IconButton onClick={onClose}>
            <CloseIcon/>
      </IconButton>
      <div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '10px', 
  backgroundColor: 'secondary.main',
}}>
<InputField 
    label="Pergunta" 
    id="pergunta" 
    type="text" 
    value={pergunta} 
    onChange={handlePerguntaChange} 
    sx={{ color: '#189AB4' }}
/>
<InputField 
    label="Resposta 1" 
    id="resposta1" 
    type="text" 
    value={resposta1} 
    onChange={handleResposta1Change} 
    sx={{ color: '#189AB4' }}
/>
<InputField 
    label="Resposta 2" 
    id="resposta2" 
    type="text" 
    value={resposta2} 
    onChange={handleResposta2Change} 
    sx={{ color: '#189AB4' }}
/>
<InputField 
    label="Resposta 3" 
    id="resposta3" 
    type="text" 
    value={resposta3} 
    onChange={handleResposta3Change} 
    sx={{ color: '#189AB4' }}
/>
<InputField 
    label="Resposta 4" 
    id="resposta4" 
    type="text" 
    value={resposta4} 
    onChange={handleResposta4Change} 
    sx={{ color: '#189AB4' }}
/>
  <Button onClick={handleOkClick}>OK</Button>
</div>
    </div>
  );
};

export default CreateCardsModal;
