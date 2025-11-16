import { useEffect } from 'react';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import axios from "axios";

function App() {

useEffect(() => {
  axios.post('/users', { name: 'papa' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err.message);
  });
}, []);


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
