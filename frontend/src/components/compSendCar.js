import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container';

function CompSendCar() {

    function sendToBack() {
        const elements = JSON.parse(localStorage.getItem('toCar'));
        console.log(elements)


    }
    
    return (
    <Container className='m-2 p-2'>
    <Button onClick={sendToBack} variant="outline-primary">Add to cart</Button>
    
    </Container>)
}

export default CompSendCar;