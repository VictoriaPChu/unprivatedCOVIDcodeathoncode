import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert, ListGroup, ListGroupItem} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item';
import Image from 'react-bootstrap/Image';
import emailPic from '../images/email-icon1.png';
import phonePic from '../images/phone-icon1.png';
import urgentNeedsPic from '../images/list-icon1.png';
import sutterHealth from '../images/sutter-health-logo-png-16.png'

class CalloutCard extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
				<Card style={{"backgroundColor":"#B2EADE"}}>
          <Card style={{ width: '100%', height:'100vh', margin:5, "backgroundColor":"#E6FFFA", padding:"5px"}}>
            <Card.Title>{this.props.name}</Card.Title>
            {this.props.showLogo && <Image style={{height:150,width:150,margin:3}}src={sutterHealth} thumbnail />}
          <ListGroup className="list-group-flush">
            <ListGroupItem><Image src={emailPic} thumbnail />{this.props.email}</ListGroupItem>
            <ListGroupItem><Image src={phonePic} thumbnail />{this.props.phone}</ListGroupItem>
            <ListGroupItem><Image src={urgentNeedsPic} thumbnail /><Card.Text href="#">List of Urgent Needs</Card.Text>
            <Card.Text href="#">N95 masks</Card.Text><Card.Text href="#">hand sanitizer</Card.Text></ListGroupItem>
          </ListGroup>
          <Card.Body>
        <Card.Link href="#">Google Maps Location</Card.Link>
        <Card.Link href="https://forms.gle/XUXZsx6U61RwnByn7">Sign up to donate</Card.Link>
  </Card.Body>
</Card>
        </Card>
      </div>
		)
	}
}

export default CalloutCard