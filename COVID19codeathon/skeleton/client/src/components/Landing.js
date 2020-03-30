import React from 'react';
import Button from 'react-bootstrap/Button';
import BucketList from './BucketList'

const Landing = props => {
    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="f1 fw6">Welcome to the Antihoardinator!</h1>
                    <p className="f3 fw5">
                    Don't hoard! Send your surplus to people in need!
                    </p>
                    <div>
                    <Button variant="primary" size="lg" className="mh3 grow" href="/family">
                            Calculate supplies you need
                    </Button>
                    <Button style={{margin:3}} variant="primary" size="lg" className="mh3 grow" href="/home">
                            Give or request surplies needed
                    </Button>
                </div>
    
                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing; 
