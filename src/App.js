import React, {Component} from 'react';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col
} from 'reactstrap';
import logo from './health.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plate45: 0,
      plate35: 0,
      plate25: 0,
      plate10: 0,
      plate5: 0,
      plate2: 0,
      barWeight: 45,
      finals: ''
    },
    this.plates = {
      plate45: 0,
      plate35: 0,
      plate25: 0,
      plate10: 0,
      plate5: 0,
      plate2: 0,
      inputWeight: ''
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.onBarWeightChange = this
      .onBarWeightChange
      .bind(this);
  }
  handleChange(event) {
    this.setState({finals: event.target.value});
  }
  onBarWeightChange(event) {
    this.setState({barWeight: event.target.value});
  }
  handleSubmit(event) {
    this.plates.inputWeight = this.state.finals;
    if (this.state.barWeight === 45) {
      this.state.finals -= 45;
    } else {
      this.state.finals -= 35;
    }
    //counts the required plates 45 lb
    while (this.state.finals >= 90) {
      this.state.plate45++;
      this.state.finals -= 90;
    }
    this.setState({plate45: this.state.plate45});
    this.plates.plate45 = this.state.plate45;

    //counts the required plates 35 lb
    while (this.state.finals >= 70) {
      this.state.plate35++;
      this.state.finals -= 70;
    }
    this.setState({plate35: this.state.plate35});
    this.plates.plate35 = this.state.plate35;

    //counts the required plates 25 lb
    while (this.state.finals >= 50) {
      this.state.plate25++;
      this.state.finals -= 50;
    }
    this.setState({plate25: this.state.plate25});
    this.plates.plate25 = this.state.plate25;

    //counts the required plates 10 lb
    while (this.state.finals >= 20) {
      this.state.plate10++;
      this.state.finals -= 20;
    }
    this.setState({plate10: this.state.plate10});
    this.plates.plate10 = this.state.plate10;

    //counts the required plates 5 lb
    while (this.state.finals >= 10) {
      this.state.plate5++;
      this.state.finals -= 10;
    }
    this.setState({plate5: this.state.plate5});
    this.plates.plate5 = this.state.plate5;

    //counts the required plates 2.5 lb
    while (this.state.finals >= 5) {
      this.state.plate2++;
      this.state.finals -= 5;
    }
    this.setState({plate2: this.state.plate2});
    this.plates.plate2 = this.state.plate2;

    this.reset();
    event.preventDefault();
  }
  reset() {
    this.setState({plate45: 0});
    this.setState({plate35: 0});
    this.setState({plate25: 0});
    this.setState({plate10: 0});
    this.setState({plate5: 0});
    this.setState({plate2: 0});
  }
isActive(value) {
  return 'platenumber ' + ((value !== 0) ? 'active' : 'default');
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Weight Calculator</h2>
        </div>
        <Container>
          <Row>
          <Col sm={{ size: 'auto', offset: 3 }}>
              <form onSubmit={this.handleSubmit}>
                <label>Weight to lift:</label>
                <input
                  type="number"
                  id="inputWeight"
                  value={this.state.finals}
                  placeholder="0"
                  onChange={this.handleChange}></input>
                <div>
                  <label>Bar Weight:</label>
                  <input
                    type="radio"
                    value="35"
                    name="barWeight"
                    onChange={this.onBarWeightChange}/>
                  35 lb
                  <input
                    type="radio"
                    value="45"
                    name="barWeight"
                    onChange={this.onBarWeightChange}
                    checked={true}/>
                  45 lb
                </div>
                <Button color="danger" size="lg" type="submit">Submit</Button>
              </form>
            </Col>

            <Col sm={{ size: 'auto'}}>
              <label>Plates per side:
                <ListGroup>
                  <ListGroupItem className={this.isActive(this.plates.inputWeight)}>Weight: {this.plates.inputWeight}
                  </ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate45)}>45: {this.plates.plate45}
                  &nbsp;plate(s)</ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate35)}>35: {this.plates.plate35}
                  &nbsp;plate(s)</ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate25)}>25: {this.plates.plate25}
                  &nbsp;plate(s)</ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate10)}>10: {this.plates.plate10}
                  &nbsp;plate(s)</ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate5)}>5: {this.plates.plate5}
                  &nbsp;plate(s)</ListGroupItem>
                  <ListGroupItem className={this.isActive(this.plates.plate2)}>2.5: {this.plates.plate2}
                  &nbsp;plate(s)</ListGroupItem>

                </ListGroup>
              </label>

            </Col>
          </Row>
        </Container>
        <div className="App-footer footer">

          <a href="https://twatson071.github.io/#/">
            <h6>Thomas Watson</h6>
          </a>
          <br></br>
        </div>

      </div>
    );
  }
}

export default App;
