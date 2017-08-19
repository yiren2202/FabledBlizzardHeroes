import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World! I'm Wangcheng Lee.</h1>
        <Button outline color="primary">cool</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
