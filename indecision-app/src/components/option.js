import React, { Component } from 'react';


class Option extends Component {


    render() {


        return (

            <li key={this.props.index}>Item: {this.props.option}</li>

        )}
}

export default Option;
