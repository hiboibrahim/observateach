import React from 'react';
import {Button, Card} from "react-bootstrap";
import MainScreen from '../../components/MainScreen';
import { Link } from "react-router-dom";
import notes, {} from "../../data/notes";


const myNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")){
    }
  }
  return (
    <div>
    <MainScreen title= 'Welcome back Hibo Ibrahim'>My Observations 

    <Link to='/createnote'>
      <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
        Create Observation
      </Button>
    
      {
                        notes.map(note =>(
                          <Card style={{ margin: 10 }} >
                <Card.Header style={{ display: "flex" }}>
            <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                {note.title} </span>
            
            
            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>

            </div>
            </Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
          <p>
           {note.content}
          </p>
          <footer className="blockquote-footer">
            Created on - date
          </footer>
        </blockquote>
            </Card.Body>
      </Card>

                        ))
                    }
      <Card style={{ margin: 10 }} >
                <Card.Header style={{ display: "flex" }}>
            <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                </span>
            
            
            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">Delete</Button>

            </div>
            </Card.Header>
      </Card>
    </Link>
    </MainScreen>
    </div>
  );
};


export default myNotes;


