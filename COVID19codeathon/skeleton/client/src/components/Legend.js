import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert, ListGroup, ListGroupItem, FormControl} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';

class Legend extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
    return(
      <div>
        <Card style={{"backgroundColor":"#B2EADE"}}>
          <Card.Body>
            <Card.Title>Legend</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.itemName}</Card.Subtitle>
            <Card.Text>
              <Form>
              {['checkbox'].map((type) => (
               <div> <input checked={true}  type="checkbox"/><img style={{height:20, width:20}}src="/green.png"/> Hospitals
                   </div>
                ))}
              </Form>
              <Form>
              {['checkbox'].map((type) => (
                <div> <input checked={true} type="checkbox"/><img style={{height:20, width:20}}src="/blue.png"/> Homeless Shelters
                </div>
                ))}
              </Form>
              <Form>
              {['checkbox'].map((type) => (
                <div> <input checked={false}  type="checkbox"/><img style={{height:20, width:20}}src="/red.png"/> Food Pantries
                   </div>                ))}
              </Form>

            <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
            </Card.Text>
            <Button href= "https://forms.gle/a3QbUgEcH8Hhs1kz9" variant="primary" size="lg" block>
              Submit Request for Supplies
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Legend