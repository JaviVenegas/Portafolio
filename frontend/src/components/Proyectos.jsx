

import { Card, Button } from 'react-bootstrap'

const Proyectos = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    de que se trata el proyecto
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
    </div>
  )
}

export default Proyectos
