import React, { useState, useEffect } from 'react'
import { Button, Card, Select } from 'semantic-ui-react'
import Stage from './Stage'
import axios from 'axios'
import '../App.css'

const Cards = ({ handleUpdate }) => {
  const [APIData, setAPIData] = useState([]);
  console.log()

  const setData = (data) => {
    let { id, name, age, adress, email, stage } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Adress', adress);
    localStorage.setItem('E-mail', email);
    localStorage.setItem('Stage', stage);
  }

  useEffect(() => {
    axios.get(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/candidates/candidates`)
      .then((response) => {
        setAPIData(response.data);
        console.log(response.data)
      })
  }, [])


  const getData = () => {
    axios.get(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/candidates/candidates`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/candidates/candidates/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div>
      <Card.Group>
        {APIData.map((data) => (
          <Card>
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>{data.age}</Card.Meta>
              <Card.Meta>{data.adress}</Card.Meta>
              <Card.Description>
               {data.email}
              </Card.Description>
              <Card.Header>recruite stage:
                {Stage.filter((stage) => stage.value === data.stage).map((s) => s.text)}
                 </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={(e) => { handleUpdate(e); setData(data) }}>
                  Update
                </Button>
                <Button basic color='red' onClick={() => onDelete(data.id)}>
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  )
}

export default Cards