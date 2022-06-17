import React, { useState, useEffect } from 'react'
import { Table, Button, TableCell, TableHeaderCell } from 'semantic-ui-react'
import axios from 'axios'
import '../App.css'

const Board = ({ handleClick, handleUpdate }) => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/crud/CRUD`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const getData = () => {
    axios.get(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/crud/CRUD`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://62ac39c2bd0e5d29af1d7a1b.mockapi.io/crud/CRUD/${id}`)
      .then(() => {
        getData();
      })
  }
  return (
    <div>
      <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>age</Table.HeaderCell>
              <Table.HeaderCell>email</Table.HeaderCell>
              <Table.HeaderCell>adress</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <TableHeaderCell><Button onClick={handleClick}> Add Candidate</Button></TableHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {APIData.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.age}</Table.Cell>
                  <Table.Cell>{data.adress}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={handleUpdate}>Update</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
      </Table>

    </div>
  )
}

export default Board