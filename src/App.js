import React, { useState } from 'react';
import './App.css';
import { Popup, Button } from 'semantic-ui-react'
import Cards from './components/Cards';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';

function App() {
  const [openEdit, setOpenEdit] = useState(false)
  const [addCandidate, setAddCandidate] = useState(false)

  return (
    <div className='main'>
      <h1 className="title">Candidates</h1>
      <Popup content='Add candidates' trigger={<Button onClick={()=>setAddCandidate(true)} icon='add' />} >Add Candidate</Popup>
      <Cards
        handleUpdate={() => setOpenEdit(true)}
        handleClick={() => setAddCandidate(true)}
      />
      <div className='flex'>
        {addCandidate && (<AddCard />)}
        {openEdit && (<EditCard />)}
      </div>
    </div>
  );
}

export default App;
