import { Col, Container, Spinner } from 'react-bootstrap'

export default function LoadingSpinner() {
  return (
    <Container>
        <Col className='text-center'>
            <Spinner animation="border" role="status"/>
        </Col>
    </Container>
  )
}
