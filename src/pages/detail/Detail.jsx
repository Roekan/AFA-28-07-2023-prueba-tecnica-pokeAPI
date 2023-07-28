import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useState from 'react'

export const Detail = () => {


    const [info, setInfo] = useState()

    useEffect(()=>{

    bringPokemonByName(name)
    .then(res => setInfo(res))

      }, [])


  return (
    <>
    <Container>
        <Row>
            <Col>
            Detail
            </Col>
        </Row>
    </Container>
    </>
  )
}
