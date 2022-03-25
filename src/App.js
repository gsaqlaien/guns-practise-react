
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { NavbarDui } from './Navbar/Navbar';


function App() {

  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div>
      <Navbar />
    </div>
  );
};




export default App;
