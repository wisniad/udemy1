import React, { Component } from 'react';


class toggleVisible extends Component {

    state = {
        visible : false
    };

    toggleVisible = () => {
        this.setState((prevState) => {
            return {
                visible : !prevState
            };
        });

    }

    render() {




        return (

            <div>
                <button onClick={this.toggleVisible}>
                    { this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                { this.state.visible &&
                <div>
                    <p>Some paragraph</p>
                </div>
                }
            </div>




        )}
}

export default toggleVisible;
