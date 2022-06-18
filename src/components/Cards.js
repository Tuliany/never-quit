import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form } from 'semantic-ui-react'
import Stage from './Stage'
import axios from 'axios'
import '../App.css'

const Cards = ({ handleUpdate }) => {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [found, setFound] = useState()

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
      })
  }, [])


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      APIData.filter((search) => {
        setFound(search.name.match(searchInput));
      });
    }
  }, []);

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
    <div className='columnFlex'>
      <div>
        <Card.Group>
          {APIData.map((data) => (
            <Card style={{ marginTop: "24px" }}>
              <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Meta>{data.age}</Card.Meta>
                <Card.Meta>{data.adress}</Card.Meta>
                <Card.Meta>
                  {data.email}
                </Card.Meta>
                <Card.Description>
                  {Stage.filter((stage) => stage.value === data.stage).map((s) => s.text)}
                </Card.Description>
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
      <Form style={{ position: 'fixed', bottom: '40px', width: "300px", marginTop: "48px", left: '41%' }}>
        <Form.Field>
          <input
            type="text"
            placeholder="Search here"
            onChange={handleSearch}
            value={searchInput}
          />
        </Form.Field>
        {found && 'Found'}
      </Form>
    </div>
  )
}

export default Cards