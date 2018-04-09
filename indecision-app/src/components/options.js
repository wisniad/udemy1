import React, { Component } from 'react';

class Options extends Component {


    render() {

        const removeAll = () => {
            this.setState({ options: []})
        }


        const makeDecision = () => {
            const randNum = Math.floor(Math.random() * this.props.options.length);
            const option = this.props.options[randNum]
            alert(option);

        }

        return (

            <div>

                    <p>No options</p>
                    <div>
                        <button onClick={makeDecision}>Make decision</button>
                        <button onClick={removeAll}>Remove All options</button>
                    </div>


                <ol>
                    { this.props.options && this.props.options.map( (option,index) =>  <Option key={index} option={option}/>) }
                </ol>
             </div>

        )}
}

class Option extends Component {


    render() {


        return (

            <li key={this.props.index}>Item: {this.props.option}</li>

        )}
}

export default Options;
