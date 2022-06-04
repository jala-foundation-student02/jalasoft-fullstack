import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class CompCallToApi extends React.Component {
    constructor(props) {
        console.log("CompCallToApi constructor")
        super(props);
        this.state = {
            temp: '',
            idSelected:'',
            allId:[]
        };

    };

    async componentDidMount() {
        console.log("CompCallToApi mount")

        let response = await fetch('https://api.storerestapi.com/products');

        let json = await response.json();
        let temp = json.data.map(
            (e) => (
                <Col key={e._id}>
                <Card>
                    <Card.Img variant="top" src="logo512.png" />
                    <Button onClick={()=>this.setState({idSelected:e._id})} variant="outline-primary">Add to cart</Button>{' '}
                    <Card.Body>
                        <Card.Title>{ e.title }</Card.Title>
                        <Card.Text>
                            price: { e.price }<br></br>
                            created: {e.createdAt}<br></br>
                            update time: {e.updatedAt}<br></br>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
                ));

        this.setState({
            temp: temp
        });

    }
    componentDidUpdate() {
        //console.log(this.state.idSelected)

        this.state.allId.push(this.state.idSelected)
        console.log(this.state.allId)
        localStorage.setItem('toCar', JSON.stringify(this.state.allId));
    }

    render() {
        //console.log("CompCallToApi render")

        return (
            <Container>

                <Row xs={1} md={4} className="g-4">
                {this.state.temp}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    cccccccccccccccccccccc     lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    ddddddddddddddddd  ead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>);
    }

}

export default CompCallToApi;