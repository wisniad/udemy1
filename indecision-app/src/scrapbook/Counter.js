import React, { Component } from 'react';


class App2 extends Component {

    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count : 0
        }
    };


     addOne = () => {
        console.log('plus works')
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

    };

     minusOne = () => {
        console.log('works minus');
         this.setState((prevState) => {
             return {
                 count: prevState.count - 1
             };
         });
    };

     reset = () => {
        console.log('reset')
         this.setState((prevState) => {
             return {
                 count: 0
             };
         });
    };

    render() {

        return (

            <div>
                <h1>Count: {this.state.count} </h1>
                <button id="my-id" className="button" onClick={this.addOne}>Increase</button>
                <button id="my-id" className="button" onClick={this.minusOne}>Decerease</button>
                <button id="my-id" className="button" onClick={this.reset}>Reset</button>
            </div>




        )}
    Counter.defaultProps = {
        count: 0
    }

}

export default App2;
