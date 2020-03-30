import React, {Component, Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {withRouter} from 'react-router-dom';

class Navigation extends Component {

    render (){
        const showLinks = () => {
    
            return <Fragment>
                <Nav.Link href="/home" className="text-white">
                    <span className="green-hover">
                        Home
                    </span>
                </Nav.Link>

                <Nav.Link href="/family" className="text-white">
                    <span className="green-hover">
                        Calculate Surplus
                    </span>
                </Nav.Link>
                <Nav.Link href="/Mapp2" className="text-white">
                    <span className="green-hover">
                        Give Surplus
                    </span>
                </Nav.Link>
                <Nav.Link href="/BucketList" className="text-white">
                    <span className="green-hover">
                        Organize Life
                    </span>
                </Nav.Link>
         </Fragment>
        }
    
        return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand className="f3 fw7 ml4" href="/">
                    <span className="green-hover">
                          Antihoardinator
                    </span>
                </Navbar.Brand>
                <Nav className="ml-auto mr4">
                    {showLinks()}
                </Nav>
            </Navbar>
        </div>)
    }
}


export default Navigation;
