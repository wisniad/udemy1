import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App2 from './App2';
//import App2 from './scrapbook/Counter';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
    name = 'Jam';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);


ReactDOM.render(<App2/>, document.getElementById('root'));
registerServiceWorker();
