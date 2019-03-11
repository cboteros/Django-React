import React, { component } from 'react';
import ReactDom from 'react-dom';
import header from './layout/header';

class App extends Component {
    render() {
        return (
            <Header />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

