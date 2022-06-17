import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import Column from './components/Column';

function App() {
  const [openEdit, setOpenEdit] = useState(false)
  const [addCandidate, setAddCandidate] = useState(false)

  return (
    <div className="main">
      <h1 className="title">CRUD</h1>
      <Column />
      {/* <Board
        handleUpdate={() => setOpenEdit(true)}
        handleClick={() => setAddCandidate(true)
      }/> */}
      <div className='flex'>
        {addCandidate && (<AddCard />)}
        {openEdit && (<EditCard />)}
        
      </div>
    </div>
  );
}

export default App;
