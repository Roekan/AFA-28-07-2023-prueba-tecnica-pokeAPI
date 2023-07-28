import { Container, Row, Col } from 'react-bootstrap'

export const PokeSearch = ({changeValue}) => {

  return (
    <>
      <Container >
          <Row>
              <Col>
                  <div >
                      <input type="text" onChange={(e)=>changeValue(e.target.value)} />  
                  </div>
              </Col>
          </Row>
      </Container>
    </>
  )
}