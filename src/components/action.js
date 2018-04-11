import React from 'react';

const Action = (props) => (
    <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
    >Make decision</button>
);

export default Action;

