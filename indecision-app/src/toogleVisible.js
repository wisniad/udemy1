import React, { Component } from 'react';


class toggleVisible extends Component {

    state = {
        visible : false
    };

    render() {



        const toggleVisible = () => {
            const newState = !this.state.visible;
            this.setState({
                visible : newState
            })
        }



        return (

            <div>
                <button onClick={toggleVisible}>
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
