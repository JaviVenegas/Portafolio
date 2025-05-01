

import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
const Proyectos = () => {
  return (
    <div>
       <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    de que se trata el proyecto
                </Card.Text>
                <Button className=" btn mb-2"
                style={{ borderColor: '#8113ca',borderRadius: '10px', backgroundColor: '#8113ca', color: '#fff' }}
                >Ver codigo</Button>
                <div style={{ backgroundColor: '#eee', padding: '20px' }}>

</div>
            </Card.Body>
    </Card>
    </div>
  )
}

export default Proyectos
