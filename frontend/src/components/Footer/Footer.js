import { Col, Container, Row } from "react-bootstrap";

const footer = () => {
  return (
    <footer style={{
      width: "100%", 
      position: "relative",
      botton: "0",
      display: "flex",
      justifyContent: "center",
    }}
    > 
    
    <Container>
<Row>
  <Col className="text-center py-3"> Copyright &copy; ObservaTeach </Col>
</Row>

    </Container>
    </footer>
  
  );
};

export default footer