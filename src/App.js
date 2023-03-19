import './App.css';


import React, {useState, useEffect} from 'react';
import Form from './Components/Form';
import Table from './Components/Table';

function App() {

  const [data, setData] = useState([]);

  useEffect(() =>{
    const storedData = JSON.parse(localStorage.getItem('data'));
    if(storedData) {
      setData(storedData);
    };
  }, [])

  const addKeyValueHandler = (key, value) =>{
    console.log(key, value);
    const newData = [...data, {key, value}];
    console.log(newData);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <div className='container'>
      <Form onAddKeyValue = {addKeyValueHandler} />
      <Table items={data}/>
    </div>
  )
}

export default App;
