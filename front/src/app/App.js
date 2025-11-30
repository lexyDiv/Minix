import { useEffect } from 'react';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import axios from "axios";
import { useState } from 'react';
import { useStart } from '../hoocks/useStart';
import Loading from '../components/widgets/loading/Loading';

function App() {

  const [start, setStart] = useState(false);
  const [user, setUser] = useState(null);

  useStart(setUser, setStart);


  return (
    <div className="App">
     {!start && <Loading/>}
    </div>
  );
}

export default App;
