import React, {Component} from 'react';
import Header from "./components/header";
import Options from "./components/options";
import Action from "./components/action";
import AddOption from "./components/addoption";
import OptionModal from "./components/optionmodal";
import 'normalize-css/normalize.css';
import './styles/styles.css';

class App2 extends Component {


    state = {
        subtitle: 'Put your life in the hands of computer',
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        try {
            if (localStorage.getItem("options") !== null) {
                const json = localStorage.getItem('options');
                const options = JSON.parse(json);
                this.setState({options});
            }
        }
        catch (e) {
            //
        }


        console.log('ComponentDidMount!');
    };


    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount() {
        console.log('Component will unmount');
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    };

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({selectedOption: option}))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        else {
            this.setState((prevState) => ({
                options: prevState.options.concat([option])
            }));
        }
    };

    modalClose = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    render() {

        return (

            <div>

                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        modalClose={this.modalClose}
                    />
                </div>
            </div>


        )
    }
}


/*const User = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};*/
export default App2;
