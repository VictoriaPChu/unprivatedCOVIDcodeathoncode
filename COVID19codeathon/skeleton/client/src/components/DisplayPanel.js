import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class DisplayPanel extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
				<Alert show={this.state.show} variant="success">
        		<Alert.Heading>{this.props.title}</Alert.Heading>
        <p>
        {this.props.children}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setState({show: false})} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      </div>
		)
	}
}

export default DisplayPanel