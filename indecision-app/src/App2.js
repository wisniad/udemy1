import React, { Component } from 'react';
import Header from "./components/header";
//import Options from "./components/options";
import toggleVisible from './scrapbook/togglevisible';


class App2 extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            title : 'Indecision App',
            subtitle: 'Put your life in the hands of computer',
            options: ['aaa','bbb']
        }
    };

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                }
            })
        }
    }

    render() {

        return (

            <div>
                <toggleVisible/>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>




        )}
}

class AddOption extends  Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e)  {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error }
        })

    }

    render() {

        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}




class Action extends  Component {

    render() {
        return (
            <button
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >Make decision</button>
        )
    }
}
class Options extends Component {


    render() {

        return (

            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All </button>

                {
                    this.props.options && this.props.options.map( (option) =>  <Option key={option} optionText={option}/>)
                }

            </div>

        )}
}

class Option extends Component {


    render() {


        return (
            <div>
                {this.props.optionText}
            </div>
        )}
}

export default App2;
