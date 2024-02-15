import React from 'react';
import {Button, Card} from "react-bootstrap";
import MainScreen from '../../components/MainScreen';
import { Link } from "react-router-dom";


const myNotes = () => {
  return (
    <div>
    <MainScreen title= 'Welcome back Hibo Ibrahim'>My Observations </MainScreen>

    <Link to='/createnote'>
      <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
        Create Observation
      </Button>
      <Card>
            <Card.Header>
              <span>title</span>
            </Card.Header>
            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">Delete</Button>

            </div>
      </Card>
    </Link>
    </div>
  );
};


export default myNotes;


