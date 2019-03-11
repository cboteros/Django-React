import React, { component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return <p>React App</p>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

