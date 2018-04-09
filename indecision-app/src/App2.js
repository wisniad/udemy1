import React, {Component} from 'react';
//import Header from "./components/header";
//import Options from "./components/options";
import toggleVisible from './scrapbook/togglevisible';


class App2 extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            subtitle: 'Put your life in the hands of computer',
            options: ['aaa', 'bbb']
        }
    };

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
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
            this.setState((prevState) => ({
                options: prevState.options.concat([option])
            }) );
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
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>


        )
    }
}

class AddOption extends Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }) )
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


const Action = (props) => {
    return (
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >Make decision</button>
    )
};


const Options = (props) => {
    return (

        <div>
            <button onClick={props.handleDeleteOptions}> Remove All</button>

            {
                props.options && props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                />
                ))
            }

        </div>

    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOptionSingular(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

const Header = (props) => {
    return (

        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>

    )
}

Header.defaultProps = {
    title: 'some title'
};


/*const User = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};*/
export default App2;
