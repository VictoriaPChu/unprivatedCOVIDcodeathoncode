import React, { Component } from 'react';
import { blockStatement } from '@babel/types';
import {Card, Form, Button} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import DisplayPanel from './DisplayPanel';

class BucketList extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
	}

/* NOTE! The following code will not correctly display the title card
    unless the following is used in App.js:
    <Card>
        <Card.Body>
          <Card.Title>Bucket List: Quarantine COVID-19 Edition</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.itemName}</Card.Subtitle>
        </Card.Body>
        </Card>
        <BucketList/>
        <BucketList/>
        <BucketList/>
    Number of bucket lists is can be expanded to be user chosen?*/
	render() {
		return(
			<div>
                <Card bg = {'Primary'}>
                <Card.Body>
                {this.state.show && <DisplayPanel title = "Bucket List Task:" >
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="1" />
                            {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Completed?`}/>
                    </div>
                    ))}
                    </Form.Group>
                </DisplayPanel>}
                </Card.Body>
                </Card>
            </div>
		)
	}
}

export default BucketList