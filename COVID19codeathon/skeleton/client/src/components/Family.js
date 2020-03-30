import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item'
import Grocery from './Grocery'
import Toiletries from './Toiletries'

class Family extends Component {
	constructor(props) {
    super(props);
    this.state={show: true,
        items: [{itemName:"shatatoes", 
        timeLast: 38}, 
        {itemName: "soup", 
        timeLast: 8}, 
        {itemName: "chicken", 
        timeLast: 28 }],
        value:1,
        value2:"",
        value3:0,
        value4:"0/0/0",
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        disabled:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleChange4=this.handleChange4.bind(this);
        this.handleChange5=this.handleChange5.bind(this);

        this.handleSubmit=this.handleSubmit.bind(this);
    }
     // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
  //  if (!this.state.intervalIsSet) {
    if (this.state.intervalIsSet) {
        let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
      console.log("k")
      console.log(this.state.data)
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    console.log("wtf")
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  showChangeColor = (color, time) => {
    let x = document.getElementById("block")
    x.style.backgroundColor=color
    delay(time)
    x.style.backgroundColor="#F000"
  }

  parseMessageAndDoThing = (dat,message,id) => {
    console.log(message,id)
  }
  
    handleChange(event) {
        if (event.target.value>0){
        this.setState({value: event.target.value});}
      }
      handleChange2(event) {
        this.setState({value2: event.target.value});
      }
      handleChange3(event) {
        this.setState({value3: event.target.value});
      }
      handleChange4(event) {
        this.setState({value4: event.target.value});
      }
      handleChange5(event) {
        this.setState({value5: event.target.value});
      }
    
    async handleSubmit(event) {
      await this.setState({disabled:true})  
      console.log("disabled")
      console.log(this.state.disabled)
      await this.putDataToDB(JSON.stringify({itemName:this.state.value2, timeLast:this.state.value3,expDate:this.state.value4, quantity:this.state.value5}))
      await this.setState({disabled:false})

      }
    
	render() {
    const { data } = this.state;

		return(
			<div style={{"backgroundColor":"#B2EADE"}}>
                <Card>
                <Card.Body style={{"backgroundColor":"#B2EADE"}}>
                    <Card.Title>Family</Card.Title>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Number of people in your family</Form.Label>
                        <Form.Control  as="textarea" rows="1" onChange = {this.handleChange}/>
                    </Form.Group>
                    </Form>
                    <Form>
                    <Card.Title>Add an Item</Card.Title>

                    {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <div style={{ padding: '10px' }} key={data.message}>
<Item itemName={`${JSON.parse(dat.message).itemName}`} forone={`${JSON.parse(dat.message).timeLast}`} people={this.state.value} timeLast={`${JSON.parse(dat.message).timeLast*JSON.parse(dat.message).quantity/this.state.value}`} quantity={`${JSON.parse(dat.message).quantity}`} expDate={`${JSON.parse(dat.message).expDate}` } surplus={`${JSON.parse(dat.message).timeLast*JSON.parse(dat.message).quantity/this.state.value-(JSON.parse(dat.message).expDate-3)*30}` } theid={dat.id}/>                  </div>
              ))}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Name of Item</Form.Label>
                        <Form.Control as="textarea" rows="1" onChange = {this.handleChange2}/>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control as="textarea" rows="1" onChange = {this.handleChange5}/>
                        <Form.Label>How long in days does one unit last for one person?</Form.Label>
                        <Form.Control as="textarea" rows="1" onChange = {this.handleChange3}/>
                        <Form.Label>To what month do you want your supplies to last you and your (e.g. expiration date)?</Form.Label>
                        <Form.Control as="textarea" rows="1" onChange = {this.handleChange4}/>
                    </Form.Group>

                    </Form>
                    <Button variant="primary" disabled={this.state.disabled} type="submit" onClick={this.handleSubmit}>
                    {this.state.disabled ? 'Loading…' : 'Add'}

              </Button>

                </Card.Body>
                </Card>





            </div>
		)
	}
}

export default Family