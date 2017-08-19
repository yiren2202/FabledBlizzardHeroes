import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Jumbotron, Table, Alert, Button,
  Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const heroes = [{
  id: 1,
  img: 'http://media.blizzard.com/heroes/garrosh/bust.jpg',
  name: 'Garrosh',
  desc: 'Son of Hellscream',
  price: 15000
},{
  id: 2,
  img: 'http://media.blizzard.com/heroes/stukov/bust.jpg',
  name: 'Stukov',
  desc: 'Infested Admiral',
  price: 10000
},{
  id: 3,
  img: 'http://media.blizzard.com/heroes/malthael/bust.jpg',
  name: 'Malthael',
  desc: 'Aspect of Death',
  price: 10000
},{
  id: 4,
  img: 'http://media.blizzard.com/heroes/dva/bust.jpg',
  name: 'D.VA',
  desc: 'MEKA Pilot',
  price: 10000
},{
  id: 5,
  img: 'http://media.blizzard.com/heroes/genji/bust.jpg',
  name: 'Genji',
  desc: 'Cybernetic Ninja',
  price: 10000
},{
  id: 6,
  img: 'http://media.blizzard.com/heroes/cassia/bust.jpg',
  name: 'Cassia',
  desc: 'Amazon Warmatron',
  price: 10000
},{
  id: 7,
  img: 'http://media.blizzard.com/heroes/probius/bust.jpg',
  name: 'Probius',
  desc: 'Curious Probe',
  price: 10000
},{
  id: 8,
  img: 'http://media.blizzard.com/heroes/lucio/bust.jpg',
  name: 'Lúcio',
  desc: 'Freedom Fighting DJ',
  price: 10000
},{
  id: 9,
  img: 'http://media.blizzard.com/heroes/valeera/bust.jpg',
  name: 'Valeera',
  desc: 'Shadow of the Uncrowned',
  price: 10000
},{
  id: 10,
  img: 'http://media.blizzard.com/heroes/zuljin/bust.jpg',
  name: 'Zul\'jin',
  desc: 'Warlord of the Amani',
  price: 10000
},{
  id: 11,
  img: 'http://media.blizzard.com/heroes/ragnaros/bust.jpg',
  name: 'Rognaros',
  desc: 'The Firelord',
  price: 10000
},{
  id: 12,
  img: 'http://media.blizzard.com/heroes/varian/bust.jpg',
  name: 'Varian',
  desc: 'High King of the Alliance',
  price: 10000
},{
  id: 13,
  img: 'http://media.blizzard.com/heroes/samuro/bust.jpg',
  name: 'Samuro',
  desc: 'The Blademaster',
  price: 10000
},{
  id: 14,
  img: 'http://media.blizzard.com/heroes/zarya/bust.jpg',
  name: 'Zarya',
  desc: 'Defender of Russia',
  price: 10000
},{
  id: 15,
  img: 'http://media.blizzard.com/heroes/alarak/bust.jpg',
  name: 'Alarak',
  desc: 'Highlord of the Tal\'darim',
  price: 10000
},{
  id: 16,
  img: 'http://media.blizzard.com/heroes/auriel/bust.jpg',
  name: 'Auriel',
  desc: 'Archangel of Hope',
  price: 10000
},{
  id: 17,
  img: 'http://media.blizzard.com/heroes/guldan/bust.jpg',
  name: 'Gul\'dan',
  desc: 'Darkness Incarnate',
  price: 10000
},{
  id: 18,
  img: 'http://media.blizzard.com/heroes/medivh/bust.jpg',
  name: 'Medivh',
  desc: 'The Last Guardian',
  price: 10000
},{
  id: 19,
  img: 'http://media.blizzard.com/heroes/chromie/bust.jpg',
  name: 'Chromie',
  desc: 'Keeper of Time',
  price: 10000
},{
  id: 20,
  img: 'http://media.blizzard.com/heroes/tracer/bust.jpg',
  name: 'Tracer',
  desc: 'Agent of Overwatch',
  price: 10000
}];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cart: [],
    };

    this.addToCart = (hero) => {
      const cart = this.state.cart;
      cart.push(hero);
      this.setState({
        cart,
      });
    }

    this.deleteCartItem = (index) => {
      const cart = this.state.cart;
      cart.splice(index, 1);
      this.setState({
        cart,
      });
    }

    this.toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  render() {
    const total = this.state.cart.reduce((acc, item) => acc + item.price, 0);
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Fabled Blizzard Heroes</h1>
          <p className="lead">The mightiest mavericks from the Blizzard multiverse unleash awe-inspiring power in Heroes of the Storm. With bold, diverse abilities and forceful personalities, each hero can upend a match – especially if mastered by a determined player.</p>
          <hr className="my-2" />
        <p>Heroes have an array of powerful abilities that set them apart from each other. Although unique in their own right, every hero has a kit geared towards a particular role: Assassin, Warrior, Support, Specialist</p>
          <p className="lead">
            <Button color="primary" onClick={this.toggle}>shoppingCart ( {this.state.cart.length} )</Button>
          </p>
        </Jumbotron>
        <Row>
          {
            heroes.map(hero => (
              <Col sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <CardImg top width="100%" src={hero.img} alt="Card image cap" />
                  <CardBlock>
                    <CardTitle>{hero.name}</CardTitle>
                    <CardSubtitle>{hero.desc}</CardSubtitle>
                  <CardText>{hero.price}</CardText>
                <Button
                  color="primary"
                  onClick={() => this.addToCart(hero)}
                  disabled={this.state.cart.find(item => item.id === hero.id)}
                >
                  Buy
                </Button>
                  </CardBlock>
                </Card>
              </Col>
            ))
          }
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hero</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.cart.map((item,index) => (
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td width="250">{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <Button
                          outline
                          color="danger"
                          onClick={() => this.deleteCartItem(index)}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Alert color="info" className="text-right">
              Total: {total}
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => alert(total)}
              disabled={this.state.cart.length === 0}
            >
              Checkout
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
