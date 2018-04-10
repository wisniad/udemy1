import React from 'react';

const Action = (props) => {
    return (
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >Make decision</button>
    )
};

export default Action;

