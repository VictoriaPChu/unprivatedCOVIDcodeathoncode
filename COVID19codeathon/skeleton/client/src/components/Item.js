import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {
	constructor(props) {
    super(props);
    this.state={show: true,
                data:[]}
   	
    }
    componentDidMount() {
        this.getDataFromDb();
      //  if (!this.state.intervalIsSet) {
        if (this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
      }
      getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };
      deleteFromDB = async (idTodelete) => {
          this.setState({show:false})
        parseInt(idTodelete);
        let objIdToDelete = null;
         this.state.data.forEach((dat) => {
          if (dat.id == idTodelete) {
            objIdToDelete = dat._id;
          }
        });
    
        await axios.delete('http://localhost:3001/api/deleteData', {
          data: {
            id: objIdToDelete,
          },
        });
      };
    
        

	render() {
		return(
			<div>
                {this.state.show &&<Card>
                <Card.Body style={{"backgroundColor":"#E6FFFA"}}>
                    <Card.Title>{this.props.itemName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`stats for ${this.props.people} people`}</Card.Subtitle>
                    <Card.Text>
                    {`quantity: ${this.props.quantity} units`}
                    </Card.Text>
                    <Card.Text>
                    {`one unit lasts one person: ${this.props.forone} days`}
                    </Card.Text><Card.Text>
                    {`lasts in total: ${this.props.timeLast} days`}
                    </Card.Text><Card.Text>
                    {`expires by: ${this.props.expDate}/2020`}
                    </Card.Text><Card.Text>
                    {this.props.surplus>0?`surplus: ${this.props.surplus} days of extra ${this.props.itemName} after the exp date. Consider Donating ${this.props.surplus/(this.props.timeLast/this.props.quantity)} units! `:`Quantity To Buy: maybe buy ${this.props.surplus*-1/(this.props.timeLast/this.props.quantity)} more units`}
                    </Card.Text>
                    <Card.Link onClick={() => this.deleteFromDB(this.props.theid)} href="#">Delete</Card.Link>
                </Card.Body>
                </Card>}
            </div>
		)
	}
}

export default Item