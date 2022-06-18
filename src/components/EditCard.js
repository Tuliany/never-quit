import React, { useState, useEffect } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import Stage from './Stage';
import axios from 'axios';

const EditCard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState([])
  const [id, setID] = useState(null);
  console.log(stage)

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    setAdress(localStorage.getItem('Adress'))
    setEmail(localStorage.getItem('E-mail'))
    setStage(localStorage.getItem('Stage'))
  }, []);

  const updateAPIData = () => {
    axios.put(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/candidates/candidates/${id}`, {
      name,
      age,
      adress,
      email,
      stage,
    }).then(() => {
      window.location.reload(false)
    })
  }

  const handleDropdownChange = (e, result) => {
    const { value } = result
    setStage(value)
  }

  return (
    <div className='fixedBg'>
      <div className='modal'>
        <Form style={{ width: "250px" }} className="create-form">
          <Form.Field>
            <label>First Name</label>
            <input placeholder='name'
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='age'
              value={age}
              onChange={(e) => setAge(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Adress</label>
            <input placeholder='adress'
              value={adress}
              onChange={(e) => setAdress(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <input placeholder='e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Field>
          <Select style={{ marginTop: "20px", width: '100%' }} onChange={handleDropdownChange} placeholder='Recruite stage' options={Stage} />
          <Button style={{ marginTop: "24px" }} type='submit' onClick={updateAPIData}>update</Button>
        </Form>
      </div>
    </div>
  )
}

export default EditCard;