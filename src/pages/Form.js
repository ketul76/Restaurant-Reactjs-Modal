import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Modal, Stack, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Form({formData,setFormData,cardData,setCardData}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [alert,setAlert] = useState(false);

  const changeHandler = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  }

  const submitHandle = (e) => {
    e.preventDefault();
    setCardData([...cardData,formData]);
    
   
    setFormData({
      name: "",
      email: "",
      password: "",
    })
    setOpen(false);
  }


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    // width: "80%",
    p: 4,
    background: "white",
  };
  return (
    <div className='main'>
      <div className='btnbtn'>
        <Button onClick={handleOpen} variant='contained'>Open Form</Button>
      </div>
      <div className='cards'>
      {cardData.map((item) => (
        <Card >
          <CardContent sx={{background:"#D1D9E6" }}>
        <h3>Name: {item.name}</h3><br/>
        <h3>Email: {item.email}</h3><br/>
        <h3>Password: {item.password}</h3><br/>
        </CardContent>
        </Card>
       ))}
      </div>
     
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <form  onSubmit={submitHandle}>
          <Stack spacing={2}>
            
            <TextField
              label="Name"
              type="text"
              required
              name='name'
              value={formData.name}
              onChange={changeHandler}
            />
            
            <TextField
              label="E-Mail"
              type="email"
              required
              name='email'
              value={formData.email}
              onChange={changeHandler}
            />
            
            <TextField
              label="Password"
              type="password"
              required
              name='password'
              value={formData.password}
              onChange={changeHandler}
            />
            
            <FormControlLabel
              control={<Checkbox />} label="Remember me" 
            />
            
            <Stack spacing={3} direction="row">
            <Button onClick={() => setOpen(false)}  variant="contained"  color="error">Cancel</Button>
           
            <Button 
              variant="contained" type="submit"  >Submit
            </Button>
            
            </Stack> 
          </Stack>
          </form>
        </Box>
      </Modal>
     
    </div>
  );
}

export default Form;