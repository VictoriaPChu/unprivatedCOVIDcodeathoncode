import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './styles.css';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 11300 }
  }
});

class App extends Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
  }
}

export default App
