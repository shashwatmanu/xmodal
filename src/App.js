import logo from './logo.svg';
import './App.css';
import Modal from '@mui/material/Modal';
import {useState} from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = (e) =>{
e.preventDefault();
let date = new Date(e.target.dob.value)
let today = new Date();
let mark = false;
if(e.target.phone.value.toString().length!==10){
  alert('Invalid phone number. Please enter a 10-digit phone number.');
  mark = true;
}
if(today<date){
  alert('Invalid date of birth. Date of birth cannot be in the future.');
  mark = true;
}

if(mark===false){
  handleClose();
}

  }

  
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <div><h2>User Details Modal</h2></div>
      
     <div> <button onClick={handleOpen}>Open Form</button></div>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
       <div className="modal">
      <div className="modal-content">

      <form onSubmit={handleSubmit}>
  <label for="username">Username:</label><br/>
  <input type="text" id="username" name="username" required/><br/>
  <label for="email">Email Address:</label><br/>
  <input type="email" id="email" name="email" required/>
  <br/>
  <label for="phone">Phone number:</label><br/>
  <input type="tel" id="phone" name="phone" required/>
  <br/>
  <label for="dob">Date of Birth:</label><br/>
  <input type="date" id="dob" name="dob" required/>
  <br/>
  <button className='submit-button' type='submit'>Submit</button>
</form>
      </div>
      </div>
      </Modal>
    </div>
    </>
  );
}

export default App;
