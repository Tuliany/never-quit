import React, { useState } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import Stage from './Stage';
import '../App.css'
import axios from 'axios'

const AddCard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [stage,setStage] = useState([])

  const postData = () => {
    axios.post(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/candidates/candidates`, {
      name,
      age,
      adress,
      email,
      stage
    }).then(() => {
      window.location.reload(false);
    })
  }

  const handleDropdownChange = (e, result) => {
    const { value } = result
    console.log(result)
    setStage(value)
  }

  return (
    <div className="fixedBg">
      <div className='modal'>
        <Form style={{ width: "250px" }}>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='name'
              onChange={(e) => setName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='age'
              onChange={(e) => setAge(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Adress</label>
            <input placeholder='adress'
              onChange={(e) => setAdress(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <input placeholder='e-mail'
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Field>
          <Select style={{ marginTop: "20px", width: '100%' }} onChange={handleDropdownChange} placeholder='Recruite stage' options={Stage} />
          <Button style={{marginTop: "24px"}} onClick={() => postData()} type='submit'>Submit</Button>
        </Form>
      </div>
    </div>

  )
}
export default AddCard;