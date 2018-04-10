import React from 'react';
import Option from "./option";

const Options = (props) => (

    <div>
        <button onClick={props.handleDeleteOptions}> Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
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


export default Options;
