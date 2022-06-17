import React, { useState, useEffect } from 'react';
import { Button, Form, Flex } from 'semantic-ui-react';
import axios from 'axios'

const AddCard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');

  const postData = () => {
    axios.post(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/crud/CRUD`, {
      name,
      age,
      adress,
      email,
    }).then(() => {
      window.location.reload(false);
    })
  }


  return (
    <Form className="create-form">
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
      <Button onClick={() => postData()} type='submit'>Submit</Button>
    </Form>
  )
}
export default AddCard