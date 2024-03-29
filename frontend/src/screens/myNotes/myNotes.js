import React from "react";
import { Accordion, Badge, Button, Card, useAccordionButton } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const decoratedOnClick = useAccordionButton(() =>
    console.log('totally custom!'),
);

  return (
    <div>
      <MainScreen title={"Welcome back Hibo Ibrahim"}>
        My Observations
        <Link to="/createnote">
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
              Create Observation
            </Button>
        </Link>
        {notes.map((note, index) => {
          console.log(note, 'note dataaa')
          return(
            <>
              <Accordion>
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <button
                        type="button"
                        style={{ backgroundColor: 'pink' }}
                        onClick={()=>decoratedOnClick(0)}
                      >
                        {note.title}
                      </button>
                      {note.title}
                    </span>

                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                  </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h4>
                        <Badge variant="success">Subject -{note.subject} </Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <p>{note.content}</p>
                        <footer className="blockquote-footer">
                          Created on - date
                        </footer>
                      </blockquote>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
          )
        })}
          <Card style={{ margin: 10 }}>
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
              ></span>

              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>


      </MainScreen>
      

      {/* <MainScreen title="Welcome back Hibo Ibrahim">
        My Observations
        <Link to="/createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create Observation
          </Button>
          </Link>

          {notes.map((note) => (
            <Accordion>
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {" "}
                      {note.title}
                    </Accordion.Toggle>
                    {note.title}{" "}
                  </span>

                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">Subject -{note.subject} </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
          <Card style={{ margin: 10 }}>
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
              ></span>

              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
        
      </MainScreen> */}
    </div>
  );
};

export default MyNotes;
