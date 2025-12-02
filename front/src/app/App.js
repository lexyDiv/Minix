import { useEffect } from 'react';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import axios from "axios";
import { useState } from 'react';
import { useStart } from '../hoocks/useStart';
import Loading from '../components/widgets/loading/Loading';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { useSelector } from 'react-redux';
import { Start } from '../components/widgets/start/Start';
import { useSocket } from '../hoocks/useSocket';

function App() {

  const [start, setStart] = useState(false);
  const { loading } = useSelector((store) => store.loading);
  const { user } = useSelector((store) => store.user);

  useStart(setStart);
  useSocket();

  return (
    <div className="App">
     {!start && <Start/>}  
     {loading && <Loading/>}
    </div>
  );
}

export default App;
