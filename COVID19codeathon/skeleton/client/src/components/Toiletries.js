import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class Toiletries extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
            <div>
                <Card>
                <Card.Body>
                    <Card.Title>Toiletries:</Card.Title>
                    {this.props.children}
                </Card.Body>
                </Card>
            </div>
		)
	}
}

export default Toiletries